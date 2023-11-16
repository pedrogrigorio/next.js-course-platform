import { redirect } from 'next/navigation'

interface CourseModuleProps {
  params: { id: number; module: number }
}

export default function CourseModule({ params }: CourseModuleProps) {
  if (params.module < 1 || params.module > 15) {
    redirect('/error-404')
  }

  return <div className="px-8 py-4">Course Module {params.module}</div>
}
