import Facebook from '@/components/icons/Facebook'
import Github from '@/components/icons/Github'
import Google from '@/components/icons/Google'

export default function AditionalAuthOptions() {
  return (
    <>
      <div className="flex w-full items-center justify-center gap-3">
        <div className="block h-px flex-1 bg-gray-300" />
        <span className="text-gray-300">ou</span>
        <div className="block h-px flex-1 bg-gray-300" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Google size={42} />
        <Github size={42} />
        <Facebook size={42} />
      </div>
    </>
  )
}
