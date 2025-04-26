import { Router } from 'express'

import { SEGEMENT_PATH } from '../static/paths'

import studentRoutes from './student.routes'
import teacherRoutes from './teacher.routes'
import lessonRoutes from './lessons.routes'
import invoiceRoutes from './invoice.routes'
import logRoutes from './log.routes'
import availavilityRoutes from './availability.routes'
import itemRoutes from './item.routes'

const router = Router()

router.use(SEGEMENT_PATH.student, studentRoutes)
router.use(SEGEMENT_PATH.teacher, teacherRoutes)
router.use(SEGEMENT_PATH.lesson, lessonRoutes)
router.use(SEGEMENT_PATH.invoice, invoiceRoutes)
router.use(SEGEMENT_PATH.log, logRoutes)
router.use(SEGEMENT_PATH.availability, availavilityRoutes)
router.use(SEGEMENT_PATH.item, itemRoutes)

export default router
