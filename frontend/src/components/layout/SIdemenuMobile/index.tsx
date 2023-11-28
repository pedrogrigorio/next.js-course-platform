import { Menu, User } from "lucide-react"
import { useState } from "react"
import ModulesTabs from "../Topbar/ModulesTabs"
import SearchBox from "../Topbar/SearchBox"

export default function SidemenuMobile() {

  const [menuOpen, setMeuOpen] = useState(false)

  return (
    <div className="flex h-auto w-full flex-col">
      <div className="flex justify-between items-center gap-3 px-8 pb-2 pt-8">
      <Menu size={32} onClick={() => setMeuOpen(!menuOpen)} />
      
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