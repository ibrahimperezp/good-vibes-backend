import { Router } from 'express'
import { ITEM_PATH } from '../static/paths'
import { ItemController } from '../controlers/item.controller'

const router = Router()

router.route(ITEM_PATH.create)
  .post(ItemController.saveNewItem)

router.route(ITEM_PATH.read.page)
  .post(ItemController.readItemPage)

router.route(ITEM_PATH.read.report.byDate)
  .post(ItemController.dateReport)

router.route(ITEM_PATH.read.report.byId)
  .post(ItemController.itemReport)

router.route(ITEM_PATH.update)
  .post(ItemController.editStoreItem)

export default router
