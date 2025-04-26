import { Router } from 'express'
import {
  availableDays
} from '../controlers/lessons.controller'

const router = Router()

router.route('/available-days')
  .post(availableDays)

export default router
