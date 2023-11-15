import ModulesTabs from '../ModulesTabs'
import SearchBox from '@/components/ui/SearchBox'
import User from '@/components/ui/User'

export default function Topbar() {
  return (
    <div className="flex h-auto w-full flex-col">
      <div className="flex justify-between px-8 pb-2 pt-8">
        <SearchBox />
        <User />
      </div>
      <ModulesTabs />
    </div>
  )
}
