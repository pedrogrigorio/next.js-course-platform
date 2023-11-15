interface SidemenuDataSchema {
  path: string
  text: string
  icon: string
}

export const pages: SidemenuDataSchema[] = [
  {
    path: '/home',
    text: 'Início',
    icon: 'Home',
  },
  {
    path: '/courses',
    text: 'Cursos',
    icon: 'Courses',
  },
  {
    path: '/playlists',
    text: 'Playlists',
    icon: 'Playlists',
  },
]
