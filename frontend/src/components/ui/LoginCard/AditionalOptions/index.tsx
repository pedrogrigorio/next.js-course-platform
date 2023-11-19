import Facebook from '@/components/icons/Facebook'
import Github from '@/components/icons/Github'
import Google from '@/components/icons/Google'

export default function AditionalOptions() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-14">
        <span>Esqueceu a senha?</span>
        <div className="flex w-full items-center gap-3">
          <div className="block h-px flex-1 bg-gray-300" />
          <span className="text-gray-300">ou</span>
          <div className="block h-px flex-1 bg-gray-300" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Google size={42} />
        <Github size={42} />
        <Facebook size={42} />
      </div>
    </>
  )
}
