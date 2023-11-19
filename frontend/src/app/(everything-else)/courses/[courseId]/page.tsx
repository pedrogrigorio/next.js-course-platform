'use client'

import CheckCircle from '@/components/icons/CheckCircle'
import File from '@/components/ui/File'
import VideoPlayer from '@/components/ui/VideoPlayer'
import { useFetch } from '@/hooks/useFetch'
import { Tab } from '@headlessui/react'

interface CourseProps {
  params: { courseId: number }
}

type Course = {
  id: number
  name: string
  lessons: number
  modules: number
  imgUrl: string
}

export default function CourseIntroduction({ params }: CourseProps) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const url = `/courses/${params.courseId}`
  const { data: course } = useFetch<Course>(url)

  const categories = ['Descrição', 'Arquivos']

  return (
    <div className="mt-8 h-full px-8">
      <div className="flex h-96 gap-16">
        <VideoPlayer />
        <div className="mt-5 flex flex-col gap-2">
          <h1>{course?.name} </h1>
          <ul>
            <li className="flex gap-2">
              <CheckCircle size={26} />
              {course?.modules} Módulos
            </li>
            <li className="flex gap-2">
              <CheckCircle size={26} />
              {course?.lessons} Aulas
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 w-full">
        <div className="w-full">
          <Tab.Group>
            <Tab.List className="flex space-x-1 border-b-2 border-gray-500">
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'h-full w-auto px-10 py-2.5 text-xl font-medium leading-5',
                      'focus:outline-none',
                      selected
                        ? 'border-b-4 border-red-500 text-white'
                        : 'text-gray-300 hover:text-white',
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-12">
              {categories.map((category, idx) => (
                <Tab.Panel key={idx} className={classNames('rounded-xl p-3')}>
                  {idx === 0 ? (
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime culpa accusamus eos ut fugit, vitae possimus est
                      nisi laudantium cum perferendis accusantium itaque aliquid
                      eaque suscipit ab nobis tenetur. Quibusdam. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Nesciunt
                      sapiente, officia ipsum magnam quaerat repellendus soluta
                      ut. Sequi, iusto. Fugiat veniam dicta eum hic inventore
                      praesentium. Quibusdam ab nisi quaerat.
                    </span>
                  ) : (
                    <div className="flex h-36 items-center gap-2 rounded-xl bg-gray-400 bg-opacity-10 px-4">
                      <File
                        name="Arquivo de exemplo"
                        size="3 MB"
                        format="pdf"
                      />
                      <File name="Exemplo" size="10 MB" format="pdf" />
                      <File
                        name="10 dicas de como ficar rico"
                        size="1024 KB"
                        format="pdf"
                      />
                    </div>
                  )}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}
