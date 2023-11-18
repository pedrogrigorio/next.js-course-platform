import { Request, Response } from 'express'
import { data } from '../data/classes'

class ClassControler {
  getAllClasses(req: Request, res: Response) {
    res.json(data)
  }
}

export default new ClassControler()
