import { createClient } from '@libsql/client'
import { config } from 'dotenv'
import { Response } from '../types.js'
import { createParamsForInsert, createParamsForUpdate } from '../utils/miscellaneous.js'
config()

const { TURSO_URL, TURSO_AUTH_TOKEN } = process.env

class Turso {
  constructor () {
    this.#db = createClient({
      url: TURSO_URL as string,
      authToken: TURSO_AUTH_TOKEN
    })
  }

  #db

  async query (sql: string): Promise<Response> {
    try {
      const data = await this.#db.execute(sql)
      return { success: true, data: { records: data.rows } }
    } catch (e) { return { success: false, errorDescription: 'No se pudo realizar la consulta', code: '001' } }
  }

  async queryWithArguments (sql: string, args: any[]): Promise<Response> {
    try {
      const data = await this.#db.execute({ sql, args: [...args] })
      return { success: true, data: { records: data.rows } }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo realizar la consulta', code: '002' }
    }
  }

  async insertQuery (table: string, data: { [key: string]: any }): Promise<Response> {
    const { query, values } = createParamsForInsert(table, data)
    return await this.queryWithArguments(query, values)
  }

  async updateQuery (tabla: string, data: { [key: string]: any }, where: { field: string, value: unknown }): Promise<Response> {
    const { query, values } = createParamsForUpdate(tabla, data, where)
    return await this.queryWithArguments(query, values)
  }
}

export default new Turso()
