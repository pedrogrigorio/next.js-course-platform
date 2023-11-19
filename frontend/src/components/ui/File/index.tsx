import Fileicon from '@/components/icons/FileIcon'

interface FileProps {
  name: string
  format: string
  size: string
}

export default function File({ name, format, size }: FileProps) {
  return (
    <div className="w-52 overflow-hidden text-ellipsis rounded-lg bg-gray-500 bg-opacity-25 p-4 hover:bg-gray-500 hover:bg-opacity-75">
      <a href="http://localhost:3000/sample.pdf" download={`${name}.${format}`}>
        <span className="whitespace-nowrap">{name}</span>
        <div className="mt-8 flex justify-between gap-4">
          <div className="flex gap-2">
            <Fileicon size={24} />
            <span>{format}</span>
          </div>
          <span>{size}</span>
        </div>
      </a>
    </div>
  )
}
