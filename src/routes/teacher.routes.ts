import { Router } from 'express'
import { deleteTeacher, disableTeacher, enableTeacher, registerTeacher, teacherPage, updateTeacherDescription, updateTeacherEmail, updateTeacherName, updateTeacherPicture } from '../controlers/teacher.controller'

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

router.route('/update-name')
  .post(updateTeacherName)

router.route('/update-description')
  .post(updateTeacherDescription)

router.route('/update-email')
  .post(updateTeacherEmail)

router.route('/update-picture')
  .post(updateTeacherPicture)

export default router
