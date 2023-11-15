'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { modules } from '@/data/TopbarModules'
import { useEffect, useRef, useState } from 'react'

export default function ModulesTabs() {
  const [leftArrowActive, setLeftArrowActive] = useState(false)
  const [rightArrowActive, setRightArrowActive] = useState(true)
  const scrollableContainer = useRef<HTMLDivElement>(null)

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
        className="scrollbar-none flex gap-12 overflow-hidden overflow-x-scroll scroll-smooth px-8"
        ref={scrollableContainer}
      >
        {modules.map((module) => (
          <div key={module.id}>
            <span className="whitespace-nowrap text-gray-300">
              {module.text}
            </span>
          </div>
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
