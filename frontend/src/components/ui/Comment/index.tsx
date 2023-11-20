import Like from '@/components/icons/Like'
import Image from 'next/image'

interface CommentProps {
  name: string
  imgUrl: string
  likes: number
}

export default function Comment({ name, imgUrl, likes }: CommentProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-4">
        <Image
          width={32}
          height={32}
          alt="avatar"
          src={imgUrl}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="text-xs text-gray-300">1 ano atrás</span>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        veritatis nemo delectus qui, deleniti laudantium voluptas, debitis est
        similique illum cupiditate provident at dicta voluptatem facilis quidem
        numquam eum adipisci! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Labore, hic eos ea aut animi laboriosam. Recusandae architecto,
        quam iusto assumenda dolores provident temporibus quod voluptatem!
        Officiis error assumenda placeat doloribus.
      </p>
      <div className="flex items-center justify-center gap-4 text-gray-300">
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 hover:bg-gray-300 hover:bg-opacity-30">
            <Like size={24} color="#808191" />
          </button>

          <span>{likes}</span>
        </div>

        <span>•</span>
        <button className="hover:text-white">Responder</button>
      </div>
    </div>
  )
}
