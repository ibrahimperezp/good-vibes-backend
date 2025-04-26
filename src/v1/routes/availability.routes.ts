import { Router } from 'express'
import { AVAILABILITY_PATH } from '../static/paths'
import { AvailabilityController } from '../controlers/availability.controller'

const router = Router()

router.route(AVAILABILITY_PATH.read.page)
  .post(AvailabilityController.readAvailabilityPage)

export default router
