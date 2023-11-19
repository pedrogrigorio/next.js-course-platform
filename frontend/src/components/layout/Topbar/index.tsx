'use client'

import ModulesTabs from './ModulesTabs'
import SearchBox from '@/components/layout/Topbar/SearchBox'
import User from '@/components/layout/Topbar/User'
import { useParams } from 'next/navigation'

export default function Topbar() {
  const params = useParams()

  const courseId = params.courseId
  const moduleId = params.moduleId
  const lessonId = params.lessonId

  const isCoursePage = courseId !== undefined
  const isIntroductionPage = isCoursePage && moduleId === undefined
  const isLessonPage = lessonId !== undefined

  return (
    <div className="flex h-auto w-full flex-col">
      <div className="flex justify-between gap-3 px-8 pb-2 pt-8">
        {!isIntroductionPage && !isLessonPage ? (
          <SearchBox />
        ) : (
          <div className="h-10" />
        )}
        <User />
      </div>
      {isCoursePage ? <ModulesTabs /> : <div className="h-10" />}
    </div>
  )
}
