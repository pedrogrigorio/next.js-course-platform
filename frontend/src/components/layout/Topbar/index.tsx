'use client'

import ModulesTabs from '../ModulesTabs'
import SearchBox from '@/components/ui/SearchBox'
import User from '@/components/ui/User'
import { useParams, usePathname } from 'next/navigation'

export default function Topbar() {
  const pathname = usePathname()
  const params = useParams()

  const isCoursePage = params.id !== undefined
  const isIntroductionPage = pathname.endsWith('/introduction')

  return (
    <div className="flex h-auto w-full flex-col">
      <div className="flex justify-between px-8 pb-2 pt-8">
        <SearchBox display={isIntroductionPage} />
        <User />
      </div>
      {isCoursePage ? <ModulesTabs /> : <div className="h-10" />}
    </div>
  )
}
