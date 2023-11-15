'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { pages } from '@/data/SidemenuData'
import Home from '@/components/icons/home'
import Courses from '@/components/icons/courses'
import Playlists from '@/components/icons/playlists'
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

export default function Pages() {
  const pathname = usePathname()
  const [isRotated, setIsRotated] = useState(false)

  const handleClick = () => {
    setIsRotated(!isRotated)
  }

  return (
    <ul className="flex flex-col gap-8">
      {pages.map((page) => (
        <li key={page.path}>
          <Link href={page.path} className="flex items-center gap-4">
            {pathname === page.path ? (
              <>
                <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-400">
                  {getIconByName(page.icon, true)}
                </button>
                <span className="flex-1 font-semibold">{page.text}</span>
                {page.path === '/courses' && (
                  <button
                    className={`transform ${
                      isRotated ? 'rotate-90' : 'rotate-0'
                    } transition duration-300 ease-in-out`}
                    onClick={handleClick}
                  >
                    <ChevronRight
                      size={16}
                      color={isRotated ? '#FFF' : '#808191'}
                      className="hover:"
                    />
                  </button>
                )}
              </>
            ) : (
              <>
                <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                  {getIconByName(page.icon, false)}
                </button>
                <span className="text-gray-300 transition duration-200 hover:text-white">
                  {page.text}
                </span>
              </>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
