import { Router } from 'express'
import { INVOICE_PATH } from '../static/paths'
import { InvoiceController } from '../controlers/invoice.controller'

const router = Router()

router.route(INVOICE_PATH.read.amountByMonth)
  .post(InvoiceController.totalAmount)

router.route(INVOICE_PATH.read.page)
  .post(InvoiceController.readInvoicePage)

export default router
