import { Router } from 'express'
import { LOG_PATH } from '../static/paths'
import { LogController } from '../controlers/log.controller'

const router = Router()

router.route(LOG_PATH.read.students)
  .post(LogController.readStudentsLog)

export default router
