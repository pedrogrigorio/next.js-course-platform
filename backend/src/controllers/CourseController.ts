import { Request, Response } from 'express'
import { data } from '../data/data'

class CourseController {
  getAllCourses(req: Request, res: Response) {
    res.json(data)
  }

  getCourseById(req: Request, res: Response) {
    const courseId = parseInt(req.params.courseId)
    const course = data.find((course) => course.id === courseId)

    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }

    res.json(course)
  }

  getCourseModules(req: Request, res: Response) {
    const courseId = parseInt(req.params.courseId)
    const course = data.find((course) => course.id === courseId)

    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }

    const modules = course.modules

    res.json(modules)
  }

  getCourseModuleById(req: Request, res: Response) {
    const courseId = parseInt(req.params.courseId)
    const moduleId = parseInt(req.params.moduleId)

    const course = data.find((course) => course.id === courseId)

    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }

    const module = course.modules.find((module) => module.id === moduleId)

    if (!module) {
      return res.status(404).json({ message: 'Module not found' })
    }

    res.json(module)
  }
}

export default new CourseController()
