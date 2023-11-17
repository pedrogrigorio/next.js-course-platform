'use client'

import PlaylistCard from '@/components/ui/PlaylistCard'
import { api } from '@/lib/axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface PlaylistSchema {
  id: number
  name: string
  classes: number
  imgUrl: string
}

export default function Playlists() {
  const [playlists, setPlaylists] = useState<PlaylistSchema[]>([])

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
      <ul className="grid grid-cols-galery gap-4">
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
