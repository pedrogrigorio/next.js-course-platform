interface CourseProps {
  params: { id: number }
}

export default function Course({ params }: CourseProps) {
  return <div>Curso {params.id}</div>
}
