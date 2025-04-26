import { Router } from 'express'
import {
  availableDays,
  timeRange
} from '../controlers/lessons.controller'

const router = Router()

router.route('/available-days')
  .post(availableDays)

router.route('/time-range')
  .post(timeRange)

export default router
