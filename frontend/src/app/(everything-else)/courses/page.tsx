'use client'

import CourseCard from '@/components/ui/CourseCard'
import { api } from '@/lib/axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CourseSchema {
  id: number
  name: string
  classes: number
  modules: number
  imgUrl: string
}

export default function Courses() {
  const [courses, setCourses] = useState<CourseSchema[]>([])

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
      <ul className="grid grid-cols-galery gap-4">
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`courses/${course.id}`}>
              <CourseCard
                name={course.name}
                modules={course.modules}
                classes={course.classes}
                imgUrl={course.imgUrl}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
