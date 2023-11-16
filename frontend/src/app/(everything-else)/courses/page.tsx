'use client'

import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'

interface CourseSchema {
  id: number
  name: string
  classes: number
  modules: number
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
    <div className="px-8 py-4">
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <span>{course.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
