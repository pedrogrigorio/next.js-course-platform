interface PlaylistProps {
  params: { id: number }
}

export default function Playlist({ params }: PlaylistProps) {
  return <div>Playlist {params.id}</div>
}
