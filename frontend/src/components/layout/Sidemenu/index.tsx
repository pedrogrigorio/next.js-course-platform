import Pages from './components/Pages'

export default function Sidemenu() {
  return (
    <div
      className="flex h-screen w-80 flex-col gap-12 px-8 pt-10"
      style={{
        background: 'linear-gradient(345deg, #1A1922 73.02%, #322F41 145.24%)',
      }}
    >
      <h3>videoplatform</h3>
      <nav className="flex flex-col gap-6">
        <span className="text-xs font-semibold text-gray-300">MENU</span>

        <Pages />

        <div className="mt-10 h-0.5 bg-gray-500" />
      </nav>
    </div>
  )
}
