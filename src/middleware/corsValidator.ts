
export const corsValidator = (origin: (string | undefined), callback: (err: Error | null, origin?: undefined | boolean | Array<boolean | string | RegExp>) => void): void => {
  return (process.env.ORIGIN === origin) || (origin === undefined)
    ? callback(null, true)
    : callback(new Error('nope'))
}
