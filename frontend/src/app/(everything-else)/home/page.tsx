'use client'

import ClassCard from '@/components/ui/ClassCard'
import CourseCard from '@/components/ui/CourseCard'
import { api } from '@/lib/axios'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

interface CourseSchema {
  id: number
  name: string
  classes: number
  modules: number
  imgUrl: string
}

interface LessonSchema {
  id: number
  lessonTitle: string
  course: string
  module: number
  duration: string
  imgUrl: string
}

export default function Home() {
  const [courses, setCourses] = useState<CourseSchema[]>([])
  const [lessons, setLessons] = useState<LessonSchema[]>([])
  const [visibileItems, setVisibileItems] = useState(0)
  const gridRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    const updateVisibleItems = () => {
      if (grid) {
        const containerWidth = grid.getBoundingClientRect().width
        const itemsPerPage = Math.floor(containerWidth / 352)
        setVisibileItems(itemsPerPage)
      }
    }

    updateVisibleItems()
    window.addEventListener('resize', updateVisibleItems)
    return () => {
      window.removeEventListener('resize', updateVisibleItems)
    }
  }, [courses])

  const fetchData = async () => {
    const coursesData = await api.get('/courses')
    const lessonsData = await api.get('/classes')

    setCourses(coursesData.data)
    setLessons(lessonsData.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex flex-col gap-14 px-8 pb-12 pt-4">
      <section className="flex flex-col gap-6">
        <h1>Descubra</h1>
        <ul
          ref={gridRef}
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${visibileItems},minmax(0,1fr))`,
            gridTemplateRows: '1fr',
          }}
        >
          {courses.slice(0, visibileItems).map((course) => (
            <li key={course.id} className="flex-1">
              <Link href={`courses/${course.id}`}>
                <CourseCard
                  name={course.name}
                  modules={course.modules}
                  classes={course.classes}
                  imgUrl={course.imgUrl}
                  isHome={true}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="font-medium text-white">Últimos assistidos</h2>
        <ul
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${visibileItems},minmax(0,1fr))`,
            gridTemplateRows: '1fr',
          }}
        >
          {lessons.slice(0, visibileItems).map((lesson) => (
            <li key={lesson.id}>
              <Link href="/home">
                <ClassCard
                  lessonTitle={lesson.lessonTitle}
                  course={lesson.course}
                  duration={lesson.duration}
                  module={lesson.module}
                  imgUrl={lesson.imgUrl}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
