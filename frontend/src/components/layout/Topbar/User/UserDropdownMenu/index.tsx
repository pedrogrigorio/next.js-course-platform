'use client'

import { ChevronDown } from 'lucide-react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function UserDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('click', closeMenu)
    } else {
      document.removeEventListener('click', closeMenu)
    }

    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [isOpen])

  return (
    <div className="z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="flex w-full items-center justify-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-sm hidden sm:block">Thomas</span>
            <ChevronDown
              size={16}
              color={isOpen ? '#FFF' : '#808191'}
              className={`transform ${
                isOpen ? 'rotate-180' : 'rotate-0'
              } transition duration-300 ease-in-out`}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-900 text-white shadow-lg ring-1 ring-gray-700 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-500' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Editar perfil
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-500' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Sair
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
