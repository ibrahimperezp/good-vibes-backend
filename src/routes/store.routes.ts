import { Router } from 'express'
import {
  buyCustomCreditAmount,
  dateReport,
  editStoreItem,
  itemReport,
  readItemPage,
  saveNewItem
} from '../controlers/store.controller'

const router = Router()

router.route('/new-item')
  .post(saveNewItem)

router.route('/page')
  .post(readItemPage)

router.route('/edit-item')
  .post(editStoreItem)

router.route('/buy-credit')
  .post(buyCustomCreditAmount)

router.route('/date-report')
  .post(dateReport)

router.route('/item-report')
  .post(itemReport)

export default router
