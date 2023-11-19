'use client'

import { useFetch } from '@/hooks/useFetch'

interface LessonProps {
  params: { lessonId: number }
}

type Lesson = {
  id: number
  lessonTitle: string
  course: string
  module: number
  duration: string
  imgUrl: string
}

export default function Lesson({ params }: LessonProps) {
  const url = `/lessons/${params.lessonId}`
  const { data: lesson } = useFetch<Lesson>(url)

  return (
    <div>
      <div>{lesson?.lessonTitle}</div>
    </div>
  )
}
