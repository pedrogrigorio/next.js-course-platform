'use client'

import PlaylistCard from '@/components/ui/PlaylistCard'
import { api } from '@/lib/axios'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface PlaylistSchema {
  id: number
  name: string
  classes: number
  imgUrl: string
}

export default function Playlists() {
  const [playlists, setPlaylists] = useState<PlaylistSchema[]>([])
  const [cols, setCols] = useState(0)
  const gridRef = useRef<HTMLUListElement>(null)

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
  }, [playlists])

  const fetchData = async () => {
    const response = await api.get('/playlists')
    console.log(response.data)
    setPlaylists(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex flex-col gap-8 px-8 py-4">
      <h1>Playlists</h1>
      <ul
        ref={gridRef}
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`,
        }}
      >
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <Link href={`playlists/${playlist.id}`}>
              <PlaylistCard
                name={playlist.name}
                classes={playlist.classes}
                imgUrl={playlist.imgUrl}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
