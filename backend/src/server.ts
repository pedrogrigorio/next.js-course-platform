import express from 'express'
import cors from 'cors'
import CourseController from './controllers/CourseController'
import PlaylistController from './controllers/PlaylistController'
import ClassControler from './controllers/ClassControler'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', CourseController.getAllCourses)
app.get('/courses/:courseId', CourseController.getCourseById)

app.get('/playlists', PlaylistController.getAllPlaylists)
app.get('/playlists/:playlistId', PlaylistController.getPlaylistById)

app.get('/classes', ClassControler.getAllClasses)

app.listen(3333, () => {
  console.log('Server is running')
})
