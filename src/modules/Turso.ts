import { createClient } from '@libsql/client'
import { config } from 'dotenv'
import { Orientation, Response } from '../types.js'
import { calculatePagination, createParamsForInsert, createParamsForUpdate } from '../utils/miscellaneous.js'
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
      console.log(e)
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

  async readRecordsQuantity (table: string): Promise<Response> {
    try {
      const response = await this.query(`SELECT COUNT() FROM ${table} WHERE status != 0;`)
      if (response.success) {
        const quantity = response.data.records[0]['COUNT()']
        return { success: true, data: { quantity } }
      } else return response
    } catch (e) { return { success: false, errorDescription: 'Error de servidor: error en la consulta Cant' } }
  }

  async recordsPageQuery (table: string, guideField: string, orientation: Orientation, pageNumber: number, limit: number): Promise<Response> {
    try {
      const start = (pageNumber - 1) * limit
      const response = await this.queryWithArguments(
        `SELECT * FROM ${table} WHERE status != 0 ORDER BY ${guideField} ${orientation} LIMIT ? OFFSET ?;`,
        [limit, start]
      )
      if (response.success) {
        const records = response.data.records
        const totalDeRegistros = await this.readRecordsQuantity(table)
        if (!totalDeRegistros.success) return totalDeRegistros

        const cantidad = totalDeRegistros.data.quantity
        const pagination = calculatePagination(cantidad, pageNumber, limit)
        return { success: true, data: { records, pagination } }
      } else return response
    } catch (e) { return { success: false, errorDescription: 'Error de servidor: error en la consulta', code: '322' } }
  }
}

export default new Turso()
