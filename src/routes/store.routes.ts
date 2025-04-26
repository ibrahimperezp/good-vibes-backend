import { Router } from 'express'
import { saveNewItem } from '../controlers/store.controller'

const router = Router()

router.route('/new-item')
  .post(saveNewItem)

export default router
