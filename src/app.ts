import express from 'express'
import cors from 'cors'
import router from './v1/routes/index.routes'
import { API_VERSION_PATH } from './v1/static/paths'

const app = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(API_VERSION_PATH.v1, router)

app.get('/test', async (req, res) => {
  try {
    res.send({ success: true })
  } catch (e) { res.send({ success: false }) }
})

export default app
