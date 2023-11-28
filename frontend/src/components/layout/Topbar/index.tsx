'use client'

import ModulesTabs from './ModulesTabs'
import SearchBox from '@/components/layout/Topbar/SearchBox'
import User from '@/components/layout/Topbar/User'
import { Menu, X } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Sidemenu from '../Sidemenu'

export default function Topbar() {
  const params = useParams()

  const courseId = params.courseId
  const moduleId = params.moduleId
  const lessonId = params.lessonId

  const isCoursePage = courseId !== undefined
  const isIntroductionPage = isCoursePage && moduleId === undefined
  const isLessonPage = lessonId !== undefined

  const [menuOpen, setMeuOpen] = useState(false)

  return (
    <>
      <div className="flex h-auto w-full flex-col">
        <div className="flex items-center justify-between gap-3 px-8 pb-2 pt-8">
          <div className="md:hidden">
            <Menu size={32} onClick={() => setMeuOpen(!menuOpen)} />
          </div>

          {!isIntroductionPage && !isLessonPage ? (
            <SearchBox />
          ) : (
            <div className="h-10" />
          )}
          <User />
        </div>
        {isCoursePage ? <ModulesTabs /> : <div className="h-10" />}
      </div>

      <div
        className={`fixed z-40 h-screen w-80 duration-500 ease-in-out md:hidden ${
          menuOpen ? '' : '-translate-x-full'
        }`}
      >
        <X
          size={24}
          color="#FFF"
          className="absolute right-4 top-4"
          onClick={() => setMeuOpen(false)}
        />
        <Sidemenu />
      </div>

      {menuOpen && (
        <div className="fixed z-30 h-screen w-full bg-black opacity-75" />
      )}
    </>
  )
}
