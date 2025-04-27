import { API_PATH } from './static/paths'
import paramsValidator from './middlewares/ParamsValidator'
import authenticationValidator from './middlewares/AutenticationValidator'
import authorizationValidator from './middlewares/AuthorizationValidator'
import router from './routes/index.routes'

export default {
  paramsValidator,
  authenticationValidator,
  authorizationValidator,
  router,
  path: API_PATH
}
