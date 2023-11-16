interface CourseModuleProps {
  params: { id: number; module: number }
}

export default function CourseModule({ params }: CourseModuleProps) {
  return <div>Course Module {params.module}</div>
}
