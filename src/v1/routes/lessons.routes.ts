import { Router } from 'express'
import { LESSON_PATH } from '../static/paths'
import { LessonController } from '../controlers/lesson.controller'

const router = Router()

router.route(LESSON_PATH.read.availableDays)
  .post(LessonController.availableDays)

router.route(LESSON_PATH.read.timeRange)
  .post(LessonController.timeRange)

router.route(LESSON_PATH.read.count)
  .post(LessonController.lessonsCount)

router.route(LESSON_PATH.read.page)
  .post(LessonController.readLessonsPage)

export default router
