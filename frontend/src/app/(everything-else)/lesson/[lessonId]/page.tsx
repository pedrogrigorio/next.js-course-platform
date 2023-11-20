'use client'

import SaveOnPlaylist from '@/components/icons/SaveOnPlaylist'
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
      <div className="flex w-fit flex-col gap-4">
        <div className="flex h-96 gap-16">
          <div className="flex h-full w-[600px]">
            <VideoPlayer />
          </div>

          <ModuleProgress
            course={lesson?.course}
            module={lesson?.module}
            lessonId={lesson?.id}
          />
        </div>
        <div className="flex justify-between">
          <button className="rounded-xl bg-red-500 p-4 hover:bg-red-400">
            <SaveOnPlaylist size={24} />
          </button>
          <button className="item-self-end rounded-xl bg-red-500 px-4 py-2 hover:bg-red-400">
            Próximo módulo
          </button>
        </div>
      </div>
      <VideoTabs />
      <CommentsSection />
    </div>
  )
}
