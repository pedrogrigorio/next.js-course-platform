'use client'

import CheckCircle from '@/components/icons/CheckCircle'
import CommentsSection from '@/components/ui/CommentsSection'
import VideoPlayer from '@/components/ui/VideoPlayer'
import VideoTabs from '@/components/ui/VideoTabs'
import { courses } from '@/data/courses'

interface CourseProps {
  params: { courseId: number }
}

type Course = {
  id: number
  name: string
  lessons: number
  modules: number
  imgUrl: string
}

export default function CourseIntroduction({ params }: CourseProps) {
  // const url = `/courses/${params.courseId}`
  // const { data: course } = useFetch<Course>(url)
  const course = courses.find((course) => course.id === Number(params.courseId))

  if (!course) return null

  return (
    <div className="mt-8 px-8 pb-16">
      <div className="flex h-auto flex-col gap-16 lg:h-48 lg:flex-row 2xl:h-96">
        <VideoPlayer />
        <div className="mt-5 flex flex-col gap-2">
          <h1>{course?.name} </h1>
          <ul>
            <li className="flex gap-2">
              <CheckCircle size={26} />
              {course?.modules} Módulos
            </li>
            <li className="flex gap-2">
              <CheckCircle size={26} />
              {course?.lessons} Aulas
            </li>
          </ul>
        </div>
      </div>
      <VideoTabs />
      <CommentsSection />
    </div>
  )
}
