import { Router } from 'express'
import { totalAmount } from '../controlers/invoice.controller'

const router = Router()

router.route('/total-amount')
  .post(totalAmount)
export default router
