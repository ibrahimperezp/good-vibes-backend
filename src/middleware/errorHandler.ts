import { NextFunction, Response, Request } from 'express'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  // console.error(err.stack)
  console.error(err.name)
  res.status(500).send('Something broke!')
}
