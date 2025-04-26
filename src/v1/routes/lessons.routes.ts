import { Router } from 'express'
import { LESSON_PATH } from '../static/paths'
import {
  availableDays,
  lessonsCount,
  readLessonsPage,
  timeRange
} from '../controlers/lessons.controller'

const router = Router()

router.route(LESSON_PATH.read.availableDays)
  .post(availableDays)

router.route(LESSON_PATH.read.timeRange)
  .post(timeRange)

router.route(LESSON_PATH.read.count)
  .post(lessonsCount)

router.route(LESSON_PATH.read.page)
  .post(readLessonsPage)

export default router
