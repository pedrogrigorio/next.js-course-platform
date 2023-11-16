'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { modules } from '@/data/TopbarModules'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ModulesTabs() {
  const [leftArrowActive, setLeftArrowActive] = useState(false)
  const [rightArrowActive, setRightArrowActive] = useState(true)
  const scrollableContainer = useRef<HTMLDivElement>(null)

  const pathname = usePathname()
  const currentTab = pathname.split('/').pop()

  useEffect(() => {
    if (scrollableContainer.current) {
      const tabsList = scrollableContainer.current
      tabsList.addEventListener('scroll', manageArrows)
    }
  }, [])

  const manageArrows = () => {
    if (scrollableContainer.current) {
      const tabsList = scrollableContainer.current
      if (tabsList.scrollLeft >= 20) {
        setLeftArrowActive(true)
      } else {
        setLeftArrowActive(false)
      }

      const maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20

      if (tabsList.scrollLeft >= maxScrollValue) {
        setRightArrowActive(false)
      } else {
        setRightArrowActive(true)
      }
    }
  }

  const scrollRight = () => {
    if (scrollableContainer.current) {
      scrollableContainer.current.scrollLeft += 200
    }
  }

  const scrollLeft = () => {
    if (scrollableContainer.current) {
      scrollableContainer.current.scrollLeft -= 200
    }
  }

  return (
    <div className="relative flex h-10 items-center border-b-2 border-orange-500">
      <div
        className="flex h-full gap-12 overflow-hidden overflow-x-scroll scroll-smooth px-8 scrollbar-none"
        ref={scrollableContainer}
      >
        {modules.map((module) => (
          <Link
            href={`${module.path}`}
            key={module.id}
            className="relative flex h-full items-center justify-center"
          >
            {currentTab === module.path ? (
              <>
                <span className="whitespace-nowrap text-white">
                  {module.text}
                </span>
                <div className="absolute left-1/2 top-3/4 h-8 w-8 -translate-x-1/2 transform rounded-full bg-orange-500 blur" />
              </>
            ) : (
              <span className="whitespace-nowrap text-gray-300">
                {module.text}
              </span>
            )}
          </Link>
        ))}
      </div>

      <button
        className={`absolute left-0 h-full w-16 items-center p-3 ${
          leftArrowActive ? 'flex' : 'hidden'
        }`}
        style={{
          background: 'linear-gradient(to left, transparent 0%, #1A1922 50%',
        }}
        onClick={scrollLeft}
      >
        <ChevronLeft
          size={24}
          color="#FFF"
          className="rounded-full hover:bg-gray-500"
        />
      </button>

      <button
        className={`absolute right-0 flex h-full w-16 items-center justify-end p-3 ${
          rightArrowActive ? 'flex' : 'hidden'
        }`}
        style={{
          background: 'linear-gradient(to right, transparent 0%, #1A1922 50%',
        }}
        onClick={scrollRight}
      >
        <ChevronRight
          size={24}
          color="#FFF"
          className="rounded-full hover:bg-gray-500"
        />
      </button>
    </div>
  )
}
