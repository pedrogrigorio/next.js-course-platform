'use client'

import PlaylistCard from '@/components/ui/PlaylistCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Playlists() {
  const [numCols, setNumCols] = useState<number>()

  const playlists = [
    {
      id: 0,
      name: 'Assistir mais tarde',
      classes: 267,
      imgUrl:
        'https://www.stockphotosecrets.com/wp-content/uploads/2021/06/photocase_photo_id_3236595_square-550x550.jpg',
    },
    {
      id: 1,
      name: 'Favoritos',
      classes: 42,
      imgUrl:
        'https://i.natgeofe.com/n/8a4cd21e-3906-4c9d-8838-b13ef85f4b6e/tpc18-outdoor-gallery-1002418-12000351_01_square.jpg',
    },
  ]

  function calculateColumns() {
    const screenWidth = window.innerWidth
    const minColumnWidth = 260 // Largura mínima desejada para cada coluna
    const maxColumns = 6 // Número máximo de colunas desejado
    console.log(screenWidth)

    const numColumns = Math.floor(screenWidth / minColumnWidth)
    return Math.min(numColumns, maxColumns)
  }

  function updateColumns() {
    const numColumns = calculateColumns()
    setNumCols(numColumns)
    console.log(`Número de colunas: ${numColumns}`)

    // Faça algo com o número de colunas, como atualizar a classe do elemento HTML
    // document.getElementById('seuElemento').classList.add(`grid-cols-${numColumns}`);
  }

  useEffect(() => {
    window.addEventListener('resize', updateColumns)
  }, [])

  return (
    <div className="flex flex-col gap-8 px-8 py-4">
      <h1>Playlists</h1>
      <ul className="grid-cols-galery grid gap-4">
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
