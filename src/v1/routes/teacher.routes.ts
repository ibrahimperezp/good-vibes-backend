import { Router } from 'express'
import { TEACHER_PATH } from '../static/paths'
import {
  deleteTeacher,
  enableTeacher,
  registerTeacher,
  teacherPage,
  updateTeacherDescription,
  updateTeacherEmail,
  updateTeacherName,
  updateTeacherPicture
} from '../controlers/teacher.controller'

const router = Router()

router.route(TEACHER_PATH.create)
  .post(registerTeacher)

router.route(TEACHER_PATH.read.page)
  .post(teacherPage)

router.route(TEACHER_PATH.update.status)
  .post(enableTeacher)

router.route(TEACHER_PATH.update.name)
  .post(updateTeacherName)

router.route(TEACHER_PATH.update.description)
  .post(updateTeacherDescription)

router.route(TEACHER_PATH.update.email)
  .post(updateTeacherEmail)

router.route(TEACHER_PATH.update.picture)
  .post(updateTeacherPicture)

router.route(TEACHER_PATH.delete)
  .post(deleteTeacher)

export default router
