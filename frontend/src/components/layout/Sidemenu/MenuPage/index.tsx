'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import Courses from '@/components/icons/Courses'
import Playlists from '@/components/icons/Playlists'
// import Home from '@/components/icons/Home'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface SubmenuSchema {
  id: number
  text: string
}

interface PageProps {
  path: string
  text: string
  icon: string
  menu?: SubmenuSchema[]
}

interface IconProps {
  size: number
  active: boolean
}

const Home = ({ size, active }: IconProps) => {
  return (
    <>
      {active ? (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.09299 13.8495V11.811C6.09299 11.2906 6.51792 10.8688 7.04209 10.8688L8.95821 10.8688C9.20993 10.8688 9.45134 10.968 9.62933 11.1447C9.80732 11.3214 9.90731 11.5611 9.90731 11.811V13.8495C9.90572 14.0658 9.99118 14.2738 10.1447 14.4273C10.2983 14.5809 10.5072 14.6672 10.7251 14.6672H12.0324C12.6429 14.6688 13.229 14.4291 13.6612 14.0011C14.0935 13.5731 14.3365 12.9919 14.3365 12.3858V6.57847C14.3365 6.08887 14.1178 5.62445 13.7395 5.31034L9.29248 1.78447C8.51891 1.16627 7.41054 1.18623 6.66006 1.83188L2.31447 5.31034C1.91829 5.61519 1.6815 6.08098 1.6698 6.57847V12.3799C1.6698 13.6431 2.70139 14.6672 3.97392 14.6672H5.25133C5.70395 14.6672 6.0718 14.3047 6.07508 13.8554L6.09299 13.8495Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.09299 13.8495V11.811C6.09299 11.2906 6.51792 10.8688 7.04209 10.8688L8.95821 10.8688C9.20993 10.8688 9.45134 10.968 9.62933 11.1447C9.80732 11.3214 9.90731 11.5611 9.90731 11.811V13.8495C9.90572 14.0658 9.99118 14.2738 10.1447 14.4273C10.2983 14.5809 10.5072 14.6672 10.7251 14.6672H12.0324C12.6429 14.6688 13.229 14.4291 13.6612 14.0011C14.0935 13.5731 14.3365 12.9919 14.3365 12.3858V6.57847C14.3365 6.08887 14.1178 5.62445 13.7395 5.31034L9.29248 1.78447C8.51891 1.16627 7.41054 1.18623 6.66006 1.83188L2.31447 5.31034C1.91829 5.61519 1.6815 6.08098 1.6698 6.57847V12.3799C1.6698 13.6431 2.70139 14.6672 3.97392 14.6672H5.25133C5.70395 14.6672 6.0718 14.3047 6.07508 13.8554L6.09299 13.8495Z"
            fill="#808191"
          />
        </svg>
      )}
    </>
  )
}


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

export default function MenuPage({ path, text, icon, menu }: PageProps) {
  const pathname = usePathname()
  const params = useParams()

  const isIntroductionPage = params.module === undefined
  console.log(isIntroductionPage)

  const [isSubmenuActive, setIsSubmenuActive] = useState(false)

  const handleClick = () => {
    setIsSubmenuActive(!isSubmenuActive)
  }

  console.log(pathname)

  return (
    <>
      <li className="flex">
        <Link href={path} className="flex flex-1 items-center gap-4">
          {pathname.includes(path) ? (
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
        className={`overflow-hidden overflow-y-auto pl-12 transition-all duration-1000 scrollbar-thin scrollbar-thumb-gray-500 ${
          isSubmenuActive ? 'max-h-40' : 'max-h-0'
        }`}
      >
        {menu?.map((subpage) => (
          <li
            key={subpage.id}
            className={`overflow-hidden text-ellipsis pr-6 hover:text-white ${
              pathname.includes(`${path}/${subpage.id}`)
                ? 'text-white'
                : 'text-gray-300'
            }`}
          >
            <Link href={`${path}/${subpage.id}`}>
              <span className="whitespace-nowrap text-xs transition duration-200 ">
                {subpage.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
