'use client'

import LessonCard from '@/components/ui/LessonCard'
import { useFetch } from '@/hooks/useFetch'
import useGridResizer from '@/hooks/useGridResizer'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface CourseModuleProps {
  params: { courseId: number; moduleId: number }
}

type Lesson = {
  id: number
  lessonTitle: string
  course: string
  module: number
  duration: string
  imgUrl: string
}

export default function CourseModule({ params }: CourseModuleProps) {
  const { data: lessons } = useFetch<Lesson[]>('/lessons')
  const [cols, gridRef] = useGridResizer<HTMLUListElement>(296)

  if (params.moduleId < 1 || params.moduleId > 15) {
    redirect('/error-404')
  }

  return (
    <div className="flex flex-col gap-8 px-8 pb-12 pt-4">
      <h1>Módulo {params.moduleId}</h1>
      <ul
        ref={gridRef}
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`,
          gridTemplateRows: '1fr',
        }}
      >
        {lessons?.map((lesson) => (
          <li key={lesson.id}>
            <Link href="/home">
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
    </div>
  )
}
