import { Request, Response } from 'express'
import { data } from '../data/playlists'

class PlaylistController {
  getAllPlaylists(req: Request, res: Response) {
    res.json(data)
  }
}

export default new PlaylistController()
