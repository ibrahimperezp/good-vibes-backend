import { Router } from 'express'
import {
  deleteStudent,
  disableStudent,
  enableStudent,
  registerStudent,
  studentCredits,
  studentPage,
  updateStudentName
} from '../controlers/student.controller'

const router = Router()

router.route('/register')
  .post(registerStudent)

router.route('/update-name')
  .post(updateStudentName)

router.route('/enable')
  .post(enableStudent)

router.route('/delete')
  .post(deleteStudent)

router.route('/disable')
  .post(disableStudent)

router.route('/page')
  .post(studentPage)

router.route('/credits')
  .post(studentCredits)

export default router
