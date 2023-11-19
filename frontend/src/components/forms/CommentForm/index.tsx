import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const commentFormSchema = z.object({
  comment: z.string().max(300),
})

type commentFormData = z.infer<typeof commentFormSchema>

export default function CommentForm() {
  function handleComment(data: commentFormData) {
    console.log(data)
    reset()
  }

  const { register, handleSubmit, reset } = useForm<commentFormData>({
    resolver: zodResolver(commentFormSchema),
  })

  return (
    <form
      onSubmit={handleSubmit(handleComment)}
      className="mt-8 flex flex-col gap-4"
    >
      <div className="flex gap-8">
        <Image
          width={48}
          height={48}
          alt="avatar"
          src="https://as1.ftcdn.net/v2/jpg/02/65/72/98/1000_F_265729869_mYcOBHGd1ifo9ocwmfDIc4tl5jN7M7sy.jpg"
          className="h-fit rounded-full"
        />

        <div className="flex h-32 flex-1 items-center gap-2 rounded-xl bg-gray-400 bg-opacity-10 p-4">
          <textarea
            {...register('comment')}
            placeholder="Adicione um comentário..."
            className="h-full flex-1 resize-none rounded-xl border-0 bg-transparent p-0 leading-relaxed text-white placeholder:text-gray-300 focus:ring-0"
          />
        </div>
      </div>
      <button
        type="submit"
        className="self-end rounded-xl bg-red-500 px-6 py-2 text-xl hover:bg-red-400"
      >
        Comentar
      </button>
    </form>
  )
}
