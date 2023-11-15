import ModulesTabs from '../ModulesTabs'
import SearchBox from '@/components/ui/SearchBox'

export default function Topbar() {
  return (
    <div className="flex h-auto w-full flex-col">
      <div className="flex px-8 pb-2 pt-8">
        <SearchBox />
      </div>
      <ModulesTabs />
    </div>
  )
}
