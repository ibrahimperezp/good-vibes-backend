import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { config } from 'dotenv'
import { apiPathV1, authenticationValidatorV1, authorizationValidatorV1, errorHandlerV1, paramsValidatorV1, routerV1, routerValidatorV1 } from './v1'
import { corsValidator } from './middleware/corsValidator'
import { errorHandler } from './middleware/errorHandler'

config()
const app = express()

// security
app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: corsValidator }))

// body parsing
app.use(express.json({ limit: process.env.JSON_LIMIT_SIZE }))

// v1
app.use(apiPathV1, routerValidatorV1)
app.use(apiPathV1, paramsValidatorV1)
app.use(apiPathV1, authenticationValidatorV1)
app.use(apiPathV1, authorizationValidatorV1)
app.use(apiPathV1, routerV1)
app.use(apiPathV1, errorHandlerV1)

app.use(errorHandler)

export default app
