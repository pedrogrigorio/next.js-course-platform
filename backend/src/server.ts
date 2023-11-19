import express from 'express'
import cors from 'cors'
import CourseController from './controllers/CourseController'
import PlaylistController from './controllers/PlaylistController'
import LessonControler from './controllers/LessonControler'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', CourseController.getAllCourses)
app.get('/courses/:courseId', CourseController.getCourseById)

app.get('/playlists', PlaylistController.getAllPlaylists)
app.get('/playlists/:playlistId', PlaylistController.getPlaylistById)

app.get('/lessons', LessonControler.getAllLessons)
app.get('/lessons/:lessonId', LessonControler.getLessonById)

app.listen(3333, () => {
  console.log('Server is running')
})
