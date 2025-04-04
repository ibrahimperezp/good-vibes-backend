import { Router } from 'express'
import { deleteTeacher, disableTeacher, enableTeacher, registerTeacher, teacherPage } from '../controlers/teacher.controller'

const router = Router()

router.route('/register')
  .post(registerTeacher)

router.route('/enable')
  .post(enableTeacher)

router.route('/delete')
  .post(deleteTeacher)

router.route('/disable')
  .post(disableTeacher)

router.route('/page')
  .post(teacherPage)

export default router
