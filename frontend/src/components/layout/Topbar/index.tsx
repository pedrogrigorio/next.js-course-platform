'use client'

import ModulesTabs from '../ModulesTabs'
import SearchBox from '@/components/ui/SearchBox'
import User from '@/components/ui/User'
import { useParams } from 'next/navigation'

export default function Topbar() {
  const params = useParams()

  const isCoursePage = params.id !== undefined

  return (
    <div className="flex h-auto w-full flex-col">
      <div className="flex justify-between px-8 pb-2 pt-8">
        <SearchBox />
        <User />
      </div>
      {isCoursePage ? <ModulesTabs /> : <div className="h-10" />}
    </div>
  )
}
