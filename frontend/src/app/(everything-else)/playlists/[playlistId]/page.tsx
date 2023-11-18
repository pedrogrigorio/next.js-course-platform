'use client'

import ClassCard from '@/components/ui/ClassCard'
import { api } from '@/lib/axios'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface PlaylistProps {
  params: { playlistId: number }
}

interface PlaylistSchema {
  id: number
  name: string
  classes: number
  imgUrl: string
}

interface LessonSchema {
  id: number
  lessonTitle: string
  course: string
  module: number
  duration: string
  imgUrl: string
}

export default function Playlist({ params }: PlaylistProps) {
  const [playlist, setPlaylist] = useState<PlaylistSchema>()
  const [lessons, setLessons] = useState<LessonSchema[]>([])
  const [cols, setCols] = useState(0)
  const gridRef = useRef<HTMLUListElement>(null)

  const fetchData = async () => {
    const playlistData = await api.get(`/playlists/${params.playlistId}`)
    const lessonsData = await api.get('/classes')

    setPlaylist(playlistData.data)
    setLessons(lessonsData.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const grid = gridRef.current
    const updateVisibleItems = () => {
      if (grid) {
        const containerWidth = grid.getBoundingClientRect().width
        const itemsPerPage = Math.floor(containerWidth / 296)
        setCols(itemsPerPage)
      }
    }

    updateVisibleItems()
    window.addEventListener('resize', updateVisibleItems)
    return () => {
      window.removeEventListener('resize', updateVisibleItems)
    }
  }, [lessons])

  return (
    <div className="flex flex-col gap-14 px-8 pb-12 pt-4">
      <h1>{playlist?.name}</h1>
      <ul
        ref={gridRef}
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`,
          gridTemplateRows: '1fr',
        }}
      >
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link href="/home">
              <ClassCard
                lessonTitle={lesson.lessonTitle}
                course={lesson.course}
                duration={lesson.duration}
                module={lesson.module}
                imgUrl={lesson.imgUrl}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
