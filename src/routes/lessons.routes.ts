import { Router } from 'express'
import {
  availableDays,
  lessonsCount,
  readLessonsPage,
  timeRange
} from '../controlers/lessons.controller'

const router = Router()

router.route('/available-days')
  .post(availableDays)

router.route('/time-range')
  .post(timeRange)

router.route('/count')
  .post(lessonsCount)

router.route('/page')
  .post(readLessonsPage)

export default router
