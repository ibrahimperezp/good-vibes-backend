
import { Response } from '../../types.js'
import { Turso } from './'

class Item {
  #table = 'item'

  async create (
    id: string, sku: string, name: string, price: number,
    tax: number, taxIsPercent: boolean, minBuying: number,
    maxBuying: number, quantity: number, description: string
  ): Promise<Response> {
    try {
      const valuesToInsert = { id, sku, name, price, tax, tax_is_percent: taxIsPercent, min_buying: minBuying, max_buying: maxBuying, quantity, description }
      const response = await Turso.insertQuery(this.#table, valuesToInsert)
      return response
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo agregar el item', code: '003' }
    }
  }

  async updateName (name: string, ROWID: number): Promise<Response> {
    try {
      const valuesToUpdate = { name }
      const response = await Turso.updateQuery(this.#table, valuesToUpdate, { field: 'ROWID', value: ROWID })

      return { success: true, data: response }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo editar al cliente', code: '003' }
    }
  }

  async disable (ROWID: number, uid: string): Promise<Response> {
    try {
      const valuesToUpdate = { status: 2 }
      const response = await Turso.updateQuery(this.#table, valuesToUpdate, { field: 'ROWID', value: ROWID })

      return { success: true, data: response }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '003' }
    }
  }

  async enable (ROWID: number, uid: string): Promise<Response> {
    try {
      const valuesToUpdate = { status: 1 }
      const response = await Turso.updateQuery(this.#table, valuesToUpdate, { field: 'ROWID', value: ROWID })

      return { success: true, data: response }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo habilitar al cliente', code: '003' }
    }
  }

  async delete (ROWID: number, uid: string): Promise<Response> {
    try {
      const valuesToUpdate = { status: 0 }
      const response = await Turso.updateQuery(this.#table, valuesToUpdate, { field: 'ROWID', value: ROWID })

      return { success: true, data: response }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo eliminar al cliente', code: '003' }
    }
  }

  async page (pageNumber: number, limit: number): Promise<Response> {
    console.log('page')
    return await Turso.recordsPageQuery(this.#table, 'ROWID', 'ASC', pageNumber, limit)
  }
}

export default new Item()
