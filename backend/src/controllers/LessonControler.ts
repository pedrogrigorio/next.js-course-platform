import { Request, Response } from 'express'
import { data } from '../data/lessons'

class LessonControler {
  getAllLessons(req: Request, res: Response) {
    res.json(data)
  }
}

export default new LessonControler()
