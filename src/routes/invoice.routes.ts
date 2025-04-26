import { Router } from 'express'
import { readInvoicePage, totalAmount } from '../controlers/invoice.controller'

const router = Router()

router.route('/total-amount')
  .post(totalAmount)

router.route('/page')
  .post(readInvoicePage)

export default router
