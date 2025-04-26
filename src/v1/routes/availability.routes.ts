import { Router } from 'express'
import { AVAILABILITY_PATH } from '../static/paths'
import { readAvailabilityPage } from '../controlers/availability.controller'

const router = Router()

router.route(AVAILABILITY_PATH.read.page)
  .post(readAvailabilityPage)

export default router
