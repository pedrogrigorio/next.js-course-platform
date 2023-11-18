'use client'

import CourseCard from '@/components/ui/CourseCard'
import { api } from '@/lib/axios'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface CourseSchema {
  id: number
  name: string
  classes: number
  modules: number
  imgUrl: string
}

export default function Courses() {
  const [courses, setCourses] = useState<CourseSchema[]>([])
  const [cols, setCols] = useState(0)
  const gridRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    const updateVisibleItems = () => {
      if (grid) {
        const containerWidth = grid.getBoundingClientRect().width
        const itemsPerPage = Math.floor(containerWidth / 296)
        setCols(itemsPerPage)
      }
    }

    updateVisibleItems()
    window.addEventListener('resize', updateVisibleItems)
    return () => {
      window.removeEventListener('resize', updateVisibleItems)
    }
  }, [courses])

  const fetchData = async () => {
    const response = await api.get('/courses')
    console.log(response.data)
    setCourses(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex flex-col gap-8 px-8 py-4">
      <h1>Courses</h1>
      <ul
        ref={gridRef}
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`,
        }}
      >
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`courses/${course.id}`}>
              <CourseCard
                name={course.name}
                modules={course.modules}
                classes={course.classes}
                imgUrl={course.imgUrl}
                isHome={false}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
