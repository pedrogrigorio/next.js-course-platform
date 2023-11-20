'use client'

import { useFetch } from '@/hooks/useFetch'
import { CircularProgress } from '@nextui-org/progress'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface ModuleProgressProps {
  lessonId: number | undefined
  course: string | undefined
  module: number | undefined
}

type Lesson = {
  id: number
  lessonTitle: string
  course: string
  module: number
  duration: string
  imgUrl: string
}

export default function ModuleProgress({
  lessonId,
  course,
  module,
}: ModuleProgressProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { data: lessons } = useFetch<Lesson[]>('/lessons')

  return (
    <div className="flex h-full w-[500px] flex-col items-center ">
      <div
        className={`flex w-full items-center gap-4 rounded-t-xl bg-gray-400 bg-opacity-20 px-4 py-4`}
      >
        <CircularProgress
          aria-label="Loading..."
          size="lg"
          value={90}
          color="danger"
          showValueLabel={true}
        />
        <div className="flex-1">
          <div>Módulo {module}</div>
          <div className="text-sm text-gray-300">1/4 • 27 min</div>
        </div>
        <ChevronDown
          onClick={() => setIsOpen(!isOpen)}
          size={24}
          color={isOpen ? '#FFF' : '#808191'}
          className={`transform justify-self-end ${
            isOpen ? 'rotate-180' : 'rotate-0'
          } transition duration-300 ease-in-out`}
        />
      </div>
      <ul
        className={`w-full overflow-hidden overflow-y-auto rounded-b-xl bg-gray-400 bg-opacity-10 text-sm text-gray-300 transition-all duration-1000 scrollbar-thin scrollbar-thumb-gray-500 ${
          isOpen ? 'max-h-full' : 'max-h-0'
        }`}
      >
        {lessons?.map((lesson) => (
          <li
            key={lesson.id}
            className={`flex items-center gap-4 p-4 hover:bg-gray-300 hover:bg-opacity-5 ${
              lesson.id === lessonId ? 'bg-gray-300 bg-opacity-10' : ''
            }`}
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-400 bg-transparent text-red-500 outline-none focus:border-0 focus:outline-none focus:ring-0"
            />
            <span className="flex-1">
              {lesson.id} {lesson.lessonTitle}
            </span>
            <span className="justify-self-end">{lesson.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
