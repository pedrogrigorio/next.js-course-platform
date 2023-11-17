import { Request, Response } from 'express'
import { data } from '../data/courses'

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
}

export default new CourseController()
