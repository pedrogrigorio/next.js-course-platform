'use client'

import PlaylistCard from '@/components/ui/PlaylistCard'
import { playlists } from '@/data/playlists'
import useGridResizer from '@/hooks/useGridResizer'
import Link from 'next/link'

export default function Playlists() {
  const [cols, gridRef] = useGridResizer<HTMLUListElement>(296)
  // const { data: playlists } = useFetch<Playlist[]>('/playlists')

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
        {playlists?.map((playlist) => (
          <li key={playlist.id}>
            <Link href={`playlists/${playlist.id}`}>
              <PlaylistCard
                name={playlist.name}
                lessons={playlist.lessons}
                imgUrl={playlist.imgUrl}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
