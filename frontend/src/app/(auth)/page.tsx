import LoginCard from '@/components/ui/LoginCard'

export default function Login() {
  return (
    <div className="flex h-full flex-col justify-center px-0 pt-4 font-semibold sm:px-8 sm:pt-10">
      <h3 className="self-center pb-8 sm:self-start sm:pb-0">videoplatform</h3>
      <div className="flex flex-1 flex-col items-center px-2 sm:flex-row sm:justify-between sm:px-4 lg:px-12 xl:px-20 2xl:px-52">
        <div className="flex flex-col items-center justify-center pb-4 sm:items-start sm:justify-start sm:pb-48 sm:pr-4">
          <h1 className="md:text-6xl lg:text-7xl 2xl:text-8xl">Bem vindo</h1>
          <h1 className="md:text-6xl lg:text-7xl 2xl:text-8xl">de volta</h1>
        </div>
        <LoginCard />
      </div>
    </div>
  )
}
