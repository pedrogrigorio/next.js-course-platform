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
        <div className="flex justify-between items-center gap-3 px-8 pb-2 pt-8">
          <div className='md:hidden'>
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

      {/* Sidemenu Mobile*/}
      <div className={`fixed h-screen w-80 duration-500 ease-in-out z-40 md:hidden ${menuOpen ? '' : '-translate-x-full'}` }>
        <X size={24} color='#FFF' className='absolute top-4 right-4' onClick={() => setMeuOpen(false)}/>
        <Sidemenu />
      </div>

      {menuOpen && (
        <div className='fixed h-screen w-full z-30 bg-black opacity-75' />
      )}
      
    </>
    
  )
}
