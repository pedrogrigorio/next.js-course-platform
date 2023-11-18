import Image from 'next/image'

interface PlaylistCardProps {
  name: string
  classes: number
  imgUrl: string
}

export default function PlaylistCard({
  name,
  classes,
  imgUrl,
}: PlaylistCardProps) {
  return (
    <div className="flex h-64 max-w-sm flex-col gap-5 overflow-hidden rounded-2xl bg-gray-700">
      <div className="h-full w-full items-center justify-center overflow-hidden">
        <Image height={500} width={500} alt="img" src={imgUrl} />
      </div>

      <div className="flex flex-col items-start justify-between px-6 pb-6">
        <span className="whitespace-nowrap font-medium">{name}</span>
        <span className="text-sm text-gray-200">{classes} aulas</span>
      </div>
    </div>
  )
}
