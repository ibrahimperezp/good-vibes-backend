import { Router } from 'express'
import {
  availableDays,
  lessonsCount,
  timeRange
} from '../controlers/lessons.controller'

const router = Router()

router.route('/available-days')
  .post(availableDays)

router.route('/time-range')
  .post(timeRange)

router.route('/count')
  .post(lessonsCount)

export default router
