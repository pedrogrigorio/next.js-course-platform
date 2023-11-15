import { pages } from '@/data/SidemenuData'
import Pages from '../Pages'

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

        <ul className="flex flex-col gap-8">
          {pages.map((page) => (
            <div key={page.text}>
              <Pages
                path={page.path}
                text={page.text}
                icon={page.icon}
                menu={page.menu}
              />
            </div>
          ))}
        </ul>

        <div className="mt-10 h-0.5 bg-gray-500" />
      </nav>
    </div>
  )
}
