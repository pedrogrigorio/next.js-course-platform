import Image from 'next/image'

export default function CommentForm() {
  return (
    <form className="mt-8 flex gap-8">
      <Image
        width={48}
        height={48}
        alt="avatar"
        src="https://as1.ftcdn.net/v2/jpg/02/65/72/98/1000_F_265729869_mYcOBHGd1ifo9ocwmfDIc4tl5jN7M7sy.jpg"
        className="h-fit rounded-full"
      />

      <div className="flex h-32 flex-1 items-center gap-2 rounded-xl bg-gray-400 bg-opacity-10 p-4">
        <textarea className="h-full flex-1 resize-none rounded-xl border-0 bg-transparent p-0 leading-relaxed text-white placeholder:text-gray-300 focus:ring-0" />
      </div>
    </form>
  )
}
