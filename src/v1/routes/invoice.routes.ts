import { Router } from 'express'
import { INVOICE_PATH } from '../static/paths'
import { readInvoicePage, totalAmount } from '../controlers/invoice.controller'

const router = Router()

router.route(INVOICE_PATH.read.amountByMonth)
  .post(totalAmount)

router.route(INVOICE_PATH.read.page)
  .post(readInvoicePage)

export default router
