import { NextFunction, Request, Response } from 'express'

const paramsValidator = (req: Request, res: Response, next: NextFunction): void => {
  console.log('middle')
  console.log(req.url)
  next()
}

export default paramsValidator
