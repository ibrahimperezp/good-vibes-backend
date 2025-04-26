import { Router } from 'express'
import { STUDENT_PATH } from '../static/paths'
import { StudentController } from '../controlers/student.controller'

const router = Router()

router.route(STUDENT_PATH.create)
  .post(StudentController.registerStudent)

router.route(STUDENT_PATH.read.page)
  .post(StudentController.studentPage)

router.route(STUDENT_PATH.read.credits)
  .post(StudentController.studentCredits)

router.route(STUDENT_PATH.read.lastClass)
  .post(StudentController.studentLastClass)

router.route(STUDENT_PATH.read.invoicePage)
  .post(StudentController.studentInvoicePage)

router.route(STUDENT_PATH.read.teachers)
  .post(StudentController.studentTeachers)

router.route(STUDENT_PATH.read.activeLessons)
  .post(StudentController.studentActiveLessons)

router.route(STUDENT_PATH.update.name)
  .post(StudentController.updateStudentName)

router.route(STUDENT_PATH.update.status)
  .post(StudentController.disableStudent)

router.route(STUDENT_PATH.delete)
  .post(StudentController.deleteStudent)

export default router
