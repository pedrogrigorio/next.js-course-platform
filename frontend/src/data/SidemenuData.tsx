interface SidemenuDataSchema {
  path: string
  text: string
  icon: string
  menu?: string[]
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
    menu: [
      'Curso tríade',
      'Faça dinheiro dormindo',
      'Trade milhonário',
      'Treino de natural',
      'Curso tríade',
      'Faça dinheiro dormindo',
      'Trade milhonário',
      'Treino de natural',
      'Curso tríade',
      'Faça dinheiro dormindo',
      'Trade milhonário',
      'Treino de natural',
      'Curso tríade',
      'Faça dinheiro dormindo',
      'Trade milhonário',
      'Treino de natural',
      'Curso tríade',
      'Faça dinheiro dormindo',
      'Trade milhonário',
      'Treino de natural',
      'Curso tríade',
      'Faça dinheiro dormindo',
      'Trade milhonário',
      'Treino de natural',
      'Curso tríade',
      'Faça dinheiro dormindo',
      'Trade milhonário',
      'Treino de natural',
    ],
  },
  {
    path: '/playlists',
    text: 'Playlists',
    icon: 'Playlists',
    menu: ['Assistir mais tarde', 'Favoritos'],
  },
]
