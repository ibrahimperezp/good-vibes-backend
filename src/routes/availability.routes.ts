import { Router } from 'express'
import { readAvailabilityPage } from '../controlers/availability.controller'

const router = Router()

router.route('/page')
  .post(readAvailabilityPage)

export default router
