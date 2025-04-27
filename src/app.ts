import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { config } from 'dotenv'
import API_V1_SETTINGS from './v1'

config()
const app = express()

// security
app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: process.env.ORIGIN }))

// body parsing
app.use(express.json({ limit: process.env.JSON_LIMIT_SIZE }))

// v1
const { path, router, paramsValidator, authenticationValidator, authorizationValidator } = API_V1_SETTINGS
app.use(path, paramsValidator)
app.use(path, authenticationValidator)
app.use(path, authorizationValidator)
app.use(path, router)

export default app
