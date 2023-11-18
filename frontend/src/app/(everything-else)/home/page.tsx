'use client'

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

export default function Home() {
  const [courses, setCourses] = useState<CourseSchema[]>([])
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
    const response = await api.get('/courses')
    console.log(response.data)
    setCourses(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex flex-col gap-14 px-8 py-4">
      <section className="flex flex-col gap-6">
        <h1>Descubra</h1>
        <ul
          ref={gridRef}
          className="grid auto-rows-auto gap-4"
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
        <span className="text-lg font-medium">Últimos assistidos</span>
        <div></div>
      </section>
    </div>
  )
}
