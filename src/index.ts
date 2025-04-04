import app from './app'
import { config } from 'dotenv'
config()

const port = process.env.PORT ?? 4000

async function main (): Promise<void> {
  app.listen(port, () => {
    console.log(`server on port ${port}`)
  })
}

main() as any
