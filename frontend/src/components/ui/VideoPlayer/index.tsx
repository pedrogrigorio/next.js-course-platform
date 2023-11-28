import dynamic from 'next/dynamic'

export default function VideoPlayer() {
  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

  return (
    <div className="max-h-48 xl:max-h-96 w-full max-w-sm xl:max-w-2xl">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={false}
        url="https://www.youtube.com/watch?v=a5SX-cukGBE"
      />
    </div>
  )
}
