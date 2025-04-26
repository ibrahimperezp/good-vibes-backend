import { Router } from 'express'
import { ITEM_PATH } from '../static/paths'
import {
  dateReport,
  editStoreItem,
  itemReport,
  readItemPage,
  saveNewItem
} from '../controlers/store.controller'

const router = Router()

router.route(ITEM_PATH.create)
  .post(saveNewItem)

router.route(ITEM_PATH.read.page)
  .post(readItemPage)

router.route(ITEM_PATH.read.report.byDate)
  .post(dateReport)

router.route(ITEM_PATH.read.report.byId)
  .post(itemReport)

router.route(ITEM_PATH.update)
  .post(editStoreItem)

export default router
