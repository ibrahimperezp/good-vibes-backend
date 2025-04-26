import express from 'express'
import cors from 'cors'

import studentRoutes from './routes/student.routes'
import teacherRoutes from './routes/teacher.routes'
import lessonRoutes from './routes/lessons.routes'
import invoiceRoutes from './routes/invoice.routes'
import { Student, Supabase } from './modules'

const app = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))

// middlewares
app.use(cors())

app.use('/student', studentRoutes)
app.use('/teacher', teacherRoutes)
app.use('/lesson', lessonRoutes)
app.use('/invoice', invoiceRoutes)

app.get('/test', async (req, res) => {
  try {
    const r = await Student.page(1, 2)
    res.send({ success: true, data: r })
  } catch (e) { res.send({ success: false }) }
})

app.post('/playground', async (req, res) => {
  try {
    const r = await Supabase.addUser('casa perez', 'cpyucatan@gmail.com', 'password1.A', { rol: 'student' })
    res.send(r)
  } catch (e) { res.send({ success: false }) }
})

export default app
