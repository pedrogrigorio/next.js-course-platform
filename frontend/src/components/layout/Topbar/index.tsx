import ModulesTabs from '../ModulesTabs'

export default function Topbar() {
  return (
    <div className="flex h-auto w-full flex-col">
      <div className="flex px-8">
        <div>Search</div>
      </div>
      <ModulesTabs />
    </div>
  )
}
