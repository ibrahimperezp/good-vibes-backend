import { Router } from 'express'
import { STUDENT_PATH } from '../static/paths'
import {
  deleteStudent,
  disableStudent,
  registerStudent,
  studentActiveLessons,
  studentCredits,
  studentInvoicePage,
  studentLastClass,
  studentPage,
  studentTeachers,
  updateStudentName
} from '../controlers/student.controller'

const router = Router()

router.route(STUDENT_PATH.create)
  .post(registerStudent)

router.route(STUDENT_PATH.read.page)
  .post(studentPage)

router.route(STUDENT_PATH.read.credits)
  .post(studentCredits)

router.route(STUDENT_PATH.read.lastClass)
  .post(studentLastClass)

router.route(STUDENT_PATH.read.invoicePage)
  .post(studentInvoicePage)

router.route(STUDENT_PATH.read.teachers)
  .post(studentTeachers)

router.route(STUDENT_PATH.read.activeLessons)
  .post(studentActiveLessons)

router.route(STUDENT_PATH.update.name)
  .post(updateStudentName)

router.route(STUDENT_PATH.update.status)
  .post(disableStudent)

router.route(STUDENT_PATH.delete)
  .post(deleteStudent)

export default router
