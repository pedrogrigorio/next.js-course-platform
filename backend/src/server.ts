import express from 'express'
import cors from 'cors'
import CourseController from './controllers/CourseController'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', CourseController.getAllCourses)
app.get('/courses/:courseId', CourseController.getCourseById)
app.get('/courses/:courseId/modules', CourseController.getCourseModules)
app.get(
  '/courses/:courseId/modules/:moduleId',
  CourseController.getCourseModuleById,
)

app.listen(3333, () => {
  console.log('Server is running')
})
