import Image from 'next/image'

interface CourseCardProps {
  name: string
  lessons: number
  modules: number
  imgUrl: string
  isHome: boolean
}

export default function CourseCard({
  name,
  modules,
  lessons,
  imgUrl,
  isHome,
}: CourseCardProps) {
  return (
    <div
      className={`relative flex max-w-sm overflow-hidden rounded-2xl ${
        isHome ? 'h-96' : 'h-64'
      } `}
    >
      <div className="z-20 flex flex-col items-start justify-between gap-6 p-7">
        <h2>{name}</h2>
        <div className="flex flex-col">
          <span className="font-medium">{modules} Módulos</span>
          <span className="text-gray-200">{lessons} aulas</span>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-black opacity-50" />
      <Image
        className="absolute left-0 top-0 z-0"
        fill={true}
        alt="img"
        src={imgUrl}
      />
    </div>
  )
}
