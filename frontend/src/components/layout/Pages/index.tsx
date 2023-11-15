'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Home from '@/components/icons/Home'
import Courses from '@/components/icons/Courses'
import Playlists from '@/components/icons/Playlists'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

const getIconByName = (iconName: string, isActive: boolean) => {
  switch (iconName) {
    case 'Home':
      return <Home size={16} active={isActive} />
    case 'Courses':
      return <Courses size={16} active={isActive} />
    case 'Playlists':
      return <Playlists size={16} active={isActive} />
    default:
      return null
  }
}

interface PageProps {
  path: string
  text: string
  icon: string
  menu?: string[]
}

export default function Page({ path, text, icon, menu }: PageProps) {
  const pathname = usePathname()
  const [isSubmenuActive, setIsSubmenuActive] = useState(false)

  const handleClick = () => {
    setIsSubmenuActive(!isSubmenuActive)
  }

  return (
    <>
      <li className="flex">
        <Link href={path} className="flex flex-1 items-center gap-4">
          {pathname === path ? (
            <>
              <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-400">
                {getIconByName(icon, true)}
              </button>
              <span className="font-semibold">{text}</span>
            </>
          ) : (
            <>
              <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                {getIconByName(icon, false)}
              </button>
              <span className="text-gray-300 transition duration-200 hover:text-white">
                {text}
              </span>
            </>
          )}
        </Link>
        {menu && (
          <button
            className={`transform ${
              isSubmenuActive ? 'rotate-90' : 'rotate-0'
            } transition duration-300 ease-in-out`}
            onClick={handleClick}
          >
            <ChevronRight
              size={16}
              color={isSubmenuActive ? '#FFF' : '#808191'}
            />
          </button>
        )}
      </li>
      <ul
        className={`scrollbar-thin scrollbar-thumb-gray-500 overflow-hidden overflow-y-auto pl-12 transition-all duration-1000 ${
          isSubmenuActive ? 'max-h-40' : 'max-h-0'
        }`}
      >
        {menu?.map((subpage) => (
          <li key={subpage}>
            <Link href={'/home'}>
              <span className="text-xs text-gray-300 transition duration-200 hover:text-white">
                {subpage}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
