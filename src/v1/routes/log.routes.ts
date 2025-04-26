import { Router } from 'express'
import { LOG_PATH } from '../static/paths'
import { readStudentsLog } from '../controlers/log.controller'

const router = Router()

router.route(LOG_PATH.read.students)
  .post(readStudentsLog)

export default router
