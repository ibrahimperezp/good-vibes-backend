import { Router } from 'express'
import { buyCustomCreditAmount, editStoreItem, readItemPage, saveNewItem } from '../controlers/store.controller'

const router = Router()

router.route('/new-item')
  .post(saveNewItem)

router.route('/page')
  .post(readItemPage)

router.route('/edit-item')
  .post(editStoreItem)

router.route('/buy-credit')
  .post(buyCustomCreditAmount)

export default router
