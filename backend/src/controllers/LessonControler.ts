import { Request, Response } from 'express'
import { data } from '../data/lessons'

class LessonControler {
  getAllLessons(req: Request, res: Response) {
    res.json(data)
  }

  getLessonById(req: Request, res: Response) {
    const lessonId = parseInt(req.params.lessonId)
    const lesson = data.find((lesson) => lesson.id === lessonId)

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' })
    }

    res.json(lesson)
  }
}

export default new LessonControler()
