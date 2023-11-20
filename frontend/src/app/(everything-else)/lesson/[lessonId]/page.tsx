'use client'

import CommentsSection from '@/components/ui/CommentsSection'
import ModuleProgress from '@/components/ui/ModuleProgress'
import VideoPlayer from '@/components/ui/VideoPlayer'
import VideoTabs from '@/components/ui/VideoTabs'
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
    <div className="mt-8 px-8 pb-16">
      <div className="flex h-96 gap-16">
        <VideoPlayer />
        <ModuleProgress
          course={lesson?.course}
          module={lesson?.module}
          lessonId={lesson?.id}
        />
      </div>
      <VideoTabs />
      <CommentsSection />
    </div>
  )
}
