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
    <div className="flex h-64 max-w-sm flex-col overflow-hidden text-ellipsis rounded-2xl bg-gray-700">
      <div className="h-full w-full items-center justify-center overflow-hidden">
        <Image height={500} width={500} alt="img" src={imgUrl} />
      </div>

      <div className="text-ellipsis px-6 py-4">
        <div className="overflow-hidden text-ellipsis">
          <span className="whitespace-nowrap font-medium">{name}</span>
        </div>
        <span className="text-sm text-gray-200">{classes} aulas</span>
      </div>
    </div>
  )
}
