import { Router } from 'express'
import { readStudentsLog } from '../controlers/log.controller'

const router = Router()

router.route('/students')
  .post(readStudentsLog)

export default router
