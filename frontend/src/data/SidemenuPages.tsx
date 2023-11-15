interface SubmenuSchema {
  id: number
  text: string
}

interface SidemenuPagesSchema {
  path: string
  text: string
  icon: string
  menu?: SubmenuSchema[]
}

export const pages: SidemenuPagesSchema[] = [
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
      {
        id: 0,
        text: 'Curso tríade',
      },
      {
        id: 1,
        text: 'Faça dinheiro dormindo',
      },
      {
        id: 2,
        text: 'Trade milhonário',
      },
      {
        id: 3,
        text: 'Treino de natural',
      },
      {
        id: 4,
        text: 'Curso de investimento avançado',
      },
      {
        id: 5,
        text: 'Fundamentos do mercado financeiro',
      },
      {
        id: 6,
        text: 'Análise técnica para iniciantes',
      },
      {
        id: 7,
        text: 'Estratégias de day trading',
      },
      {
        id: 8,
        text: 'Gestão de riscos em operações financeiras',
      },
      {
        id: 9,
        text: 'Introdução ao mercado de opções',
      },
      {
        id: 10,
        text: 'Psicologia do trader',
      },
    ],
  },
  {
    path: '/playlists',
    text: 'Playlists',
    icon: 'Playlists',
    menu: [
      {
        id: 0,
        text: 'Assistir mais tarde',
      },
      {
        id: 1,
        text: 'Favoritos',
      },
    ],
  },
]
