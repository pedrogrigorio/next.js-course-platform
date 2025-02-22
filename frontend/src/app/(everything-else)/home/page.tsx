'use client'

import CourseCard from '@/components/ui/CourseCard'
import useGridResizer from '@/hooks/useGridResizer'
import Link from 'next/link'
import LessonCard from '@/components/ui/LessonCard'
import { courses } from '@/data/courses'
import { lessons } from '@/data/lessons'

export default function Home() {
  const [visibileItems, gridRef] = useGridResizer<HTMLUListElement>(296)
  // const { data: courses } = useFetch<Course[]>('/courses')
  // const { data: lessons } = useFetch<Lesson[]>('/lessons')

  return (
    <div className="flex flex-col gap-14 px-8 pb-12 pt-4">
      <section className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <h1>Descubra</h1>
          <Link href="/courses">
            <span className="text-lg font-medium text-gray-300 hover:text-white">
              Ver tudo
            </span>
          </Link>
        </div>

        <ul
          ref={gridRef}
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${visibileItems},minmax(0,1fr))`,
            gridTemplateRows: '1fr',
          }}
        >
          {courses?.slice(0, visibileItems).map((course) => (
            <li key={course.id} className="flex-1">
              <Link href={`courses/${course.id}`}>
                <CourseCard
                  name={course.name}
                  modules={course.modules}
                  lessons={course.lessons}
                  imgUrl={course.imgUrl}
                  isHome={true}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <h2 className="font-medium text-white">Últimos assistidos</h2>
          <Link href="/courses">
            <span className="text-lg font-medium text-gray-300 hover:text-white">
              Ver tudo
            </span>
          </Link>
        </div>

        <ul
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${visibileItems},minmax(0,1fr))`,
            gridTemplateRows: '1fr',
          }}
        >
          {lessons?.slice(0, visibileItems).map((lesson) => (
            <li key={lesson.id}>
              <Link href={`/lesson/${lesson.id}`}>
                <LessonCard
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
