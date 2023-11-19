import SignupCard from '@/components/ui/SignupCard'

export default function Signup() {
  return (
    <div className="h-full justify-center px-8 py-10 font-semibold">
      <h3>videoplatform</h3>
      <div className="flex items-center justify-between px-4 py-14 lg:px-12 xl:px-20 2xl:px-52">
        <div className="flex flex-col items-start justify-start pb-48">
          <h1 className="md:text-6xl lg:text-7xl 2xl:text-8xl">Crie sua</h1>
          <h1 className="md:text-6xl lg:text-7xl 2xl:text-8xl">conta</h1>
        </div>
        <SignupCard />
      </div>
    </div>
  )
}
