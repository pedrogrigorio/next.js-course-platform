import Image from 'next/image'

interface ClassCardProps {
  lessonTitle: string
  course: string
  module: number
  duration: string
  imgUrl: string
}

export default function ClassCard({
  lessonTitle,
  course,
  module,
  duration,
  imgUrl,
}: ClassCardProps) {
  return (
    <div className="flex h-80 max-w-sm flex-col gap-5 overflow-hidden rounded-2xl bg-gray-700">
      <div className="relative h-full w-full items-center justify-center overflow-hidden">
        <Image height={500} width={500} alt="img" src={imgUrl} />
        <div className="absolute right-3 top-3 rounded-xl bg-black bg-opacity-50 px-4 py-1">
          <span className="text-white opacity-100">{duration}</span>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between px-6 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-200">{course}</span>
          <div className="h-2 w-2 rounded-full bg-orange-500" />
        </div>

        <span className="whitespace-nowrap font-medium">{lessonTitle}</span>
        <span className="text-sm text-gray-200">{module} Módulos</span>
      </div>
    </div>
  )
}
