interface CourseProps {
  params: { id: number }
}

export default function CourseIntroduction({ params }: CourseProps) {
  return <div>Introdução do Curso {params.id}</div>
}
