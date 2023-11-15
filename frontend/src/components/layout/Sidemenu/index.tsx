import Home from '@/components/icons/home'

export default function Sidemenu() {
  return (
    <div
      className="flex h-screen w-80 flex-col gap-12"
      style={{
        background: 'linear-gradient(345deg, #1A1922 73.02%, #322F41 145.24%)',
      }}
    >
      <h3 className="text-xl font-semibold">videoplatform</h3>
      <div className="flex flex-col gap-7">
        <span className="text-xs font-semibold text-gray-300">MENU</span>

        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-400">
              <Home size={16} />
            </button>
            <span>Início</span>
          </li>

          <li className="flex items-center gap-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-400">
              <Home size={16} />
            </button>
            <span>Início</span>
          </li>

          <li className="flex items-center gap-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-400">
              <Home size={16} />
            </button>
            <span>Início</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
