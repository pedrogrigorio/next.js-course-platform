import { Tab } from '@headlessui/react'
import CommentForm from '@/components/forms/CommentForm'
import Comment from '../Comment'

export default function CommentsSection() {
  const categories = [
    'Mais recentes',
    'Mais antigos',
    'Mais votados',
    'Meus comentários',
  ]

  const comments = [
    {
      name: 'Thomas Silva',
      imgUrl:
        'https://as1.ftcdn.net/v2/jpg/02/65/72/98/1000_F_265729869_mYcOBHGd1ifo9ocwmfDIc4tl5jN7M7sy.jpg',
      likes: 1.407,
    },
    {
      name: 'Jerson Martins',
      imgUrl:
        'https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=top',
      likes: 192,
    },
    {
      name: 'João Lima',
      imgUrl:
        'https://wsrv.nl/?url=wsrv.nl/puppy.jpg&w=300&h=300&fit=cover&a=attention',
      likes: 52,
    },
    {
      name: 'Pedro Garcia',
      imgUrl:
        'https://img.freepik.com/fotos-gratis/homem-de-sorriso-com-os-bracos-cruzados_1149-1711.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699747200&semt=ais',
      likes: 12,
    },
    {
      name: 'Maria de Souza',
      imgUrl:
        'https://content.latest-hairstyles.com/wp-content/uploads/medium-haircuts-for-women-with-square-face.jpg',
      likes: 24,
    },
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl">3 Comentários</h3>
      <CommentForm />

      <div className="mt-16 w-full">
        <Tab.Group>
          <Tab.List className="flex space-x-1 border-b-2 border-gray-500">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'h-full w-auto px-10 py-2.5 text-base font-medium leading-5',
                    'focus:outline-none',
                    selected
                      ? 'border-b-4 border-red-500 text-white'
                      : 'text-gray-300 hover:text-white',
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            {categories.map((category, idx) => (
              <Tab.Panel key={idx} className={classNames('rounded-xl p-3')}>
                {idx === 0 && (
                  <ul className="flex flex-col gap-5">
                    {comments.map((comment) => (
                      <li key={comment.name}>
                        <Comment
                          name={comment.name}
                          imgUrl={comment.imgUrl}
                          likes={comment.likes}
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {idx === 1 && (
                  <ul className="flex flex-col gap-5">
                    {comments.slice(2, 4).map((comment) => (
                      <li key={comment.name}>
                        <Comment
                          name={comment.name}
                          imgUrl={comment.imgUrl}
                          likes={comment.likes}
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {idx === 2 && (
                  <ul className="flex flex-col gap-5">
                    {comments.slice(1, 3).map((comment) => (
                      <li key={comment.name}>
                        <Comment
                          name={comment.name}
                          imgUrl={comment.imgUrl}
                          likes={comment.likes}
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {idx === 3 && (
                  <ul className="flex flex-col gap-5">
                    {comments.slice(0, 1).map((comment) => (
                      <li key={comment.name}>
                        <Comment
                          name={comment.name}
                          imgUrl={comment.imgUrl}
                          likes={comment.likes}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
