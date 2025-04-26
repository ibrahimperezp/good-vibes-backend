import { Router } from 'express'
import { TEACHER_PATH } from '../static/paths'
import { TeacherController } from '../controlers/teacher.controller'

const router = Router()

router.route(TEACHER_PATH.create)
  .post(TeacherController.registerTeacher)

router.route(TEACHER_PATH.read.page)
  .post(TeacherController.teacherPage)

router.route(TEACHER_PATH.update.status)
  .post(TeacherController.enableTeacher)

router.route(TEACHER_PATH.update.name)
  .post(TeacherController.updateTeacherName)

router.route(TEACHER_PATH.update.description)
  .post(TeacherController.updateTeacherDescription)

router.route(TEACHER_PATH.update.email)
  .post(TeacherController.updateTeacherEmail)

router.route(TEACHER_PATH.update.picture)
  .post(TeacherController.updateTeacherPicture)

router.route(TEACHER_PATH.delete)
  .post(TeacherController.deleteTeacher)

export default router
