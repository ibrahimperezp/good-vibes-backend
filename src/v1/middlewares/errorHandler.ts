import { NextFunction, Response, Request } from 'express'

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.log(req.url)
  console.error(err.stack)
  console.error(err.name)
  res.status(500).send('V1 error handler')
}

export default errorHandler
