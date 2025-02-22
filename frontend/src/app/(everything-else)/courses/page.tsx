'use client'

import CourseCard from '@/components/ui/CourseCard'
import { courses } from '@/data/courses'
import useGridResizer from '@/hooks/useGridResizer'
import Link from 'next/link'

type Course = {
  id: number
  name: string
  lessons: number
  modules: number
  imgUrl: string
}

export default function Courses() {
  // const { data: courses } = useFetch<Course[]>('/courses')
  const [cols, gridRef] = useGridResizer<HTMLUListElement>(296)

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
        {courses?.map((course) => (
          <li key={course.id}>
            <Link href={`courses/${course.id}`}>
              <CourseCard
                name={course.name}
                modules={course.modules}
                lessons={course.lessons}
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
