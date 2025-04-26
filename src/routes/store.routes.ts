import { Router } from 'express'
import { readItemPage, saveNewItem } from '../controlers/store.controller'

const router = Router()

router.route('/new-item')
  .post(saveNewItem)

router.route('/page')
  .post(readItemPage)

export default router
