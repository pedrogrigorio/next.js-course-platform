import { Request, Response } from 'express'
import { data } from '../data/playlists'

class PlaylistController {
  getAllPlaylists(req: Request, res: Response) {
    res.json(data)
  }

  getPlaylistById(req: Request, res: Response) {
    const playlistId = parseInt(req.params.playlistId)
    const playlist = data.find((playlist) => playlist.id === playlistId)

    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' })
    }

    res.json(playlist)
  }
}

export default new PlaylistController()
