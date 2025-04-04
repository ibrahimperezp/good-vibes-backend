import { Router } from 'express'
import { deleteTeacher, disableTeacher, enableTeacher, registerTeacher } from '../controlers/teacher.controller'

const router = Router()

router.route('/register')
  .post(registerTeacher)

router.route('/enable')
  .post(enableTeacher)

router.route('/delete')
  .post(deleteTeacher)

router.route('/disable')
  .post(disableTeacher)

export default router
