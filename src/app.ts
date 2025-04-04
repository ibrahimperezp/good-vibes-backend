import express from 'express'
import cors from 'cors'

import studentRoutes from './routes/student.routes'
import teacherRoutes from './routes/teacher.routes'
import Authentication from './modules/Authentication'

const app = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))

// middlewares
app.use(cors())

app.use('/student', studentRoutes)
app.use('/teacher', teacherRoutes)

app.post('/user', async (req, res) => {
  try {
    const r = await Authentication.addUser('ibrahim', 'ibrahimperezp@gmail.com', 'goodvibes')
    console.log(r)
    res.send({ success: true })
  } catch (e) { res.send({ success: false }) }
})

app.get('/test', async (req, res) => {
  try {
    res.send({ success: true })
  } catch (e) { res.send({ success: false }) }
})

export default app
