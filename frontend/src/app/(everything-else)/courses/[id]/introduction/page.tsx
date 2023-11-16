interface CourseProps {
  params: { id: number }
}

export default function CourseIntroduction({ params }: CourseProps) {
  return <div className="px-8 py-4">Introdução do Curso {params.id}</div>
}
