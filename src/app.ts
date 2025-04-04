import express from 'express'
import cors from 'cors'

import studentRoutes from './routes/student.routes'

const app = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))

// middlewares
app.use(cors())

app.use('/student', studentRoutes)

app.get('/test', async (req, res) => {
  try {
    res.send({ success: true })
  } catch (e) { res.send({ success: false }) }
})

export default app
