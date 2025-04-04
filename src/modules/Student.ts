import { Response } from '../types.js'
import { Turso } from './'
import Firebase from './Firebase.js'

class Student {
  #table = 'student'

  async register (name: string, email: string, password: string): Promise<Response> {
    try {
      const valuesToInsert = { name, email, status: 1 }
      const response = await Turso.insertQuery(this.#table, valuesToInsert)

      if (response.success) {
        const { ROWID } = response.data.records[0]
        await Firebase.addUser(name, email, password, { role: 'student' })
        return { success: true, data: { ROWID } }
      }
      return { success: false, errorDescription: 'No se pudo agregar el cliente', code: '006' }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo agregar el cliente', code: '003' }
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

  async disable (ROWID: number): Promise<Response> {
    try {
      const valuesToUpdate = { status: 2 }
      const response = await Turso.updateQuery(this.#table, valuesToUpdate, { field: 'ROWID', value: ROWID })

      return { success: true, data: response }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '003' }
    }
  }

  async enable (ROWID: number): Promise<Response> {
    try {
      const valuesToUpdate = { status: 1 }
      const response = await Turso.updateQuery(this.#table, valuesToUpdate, { field: 'ROWID', value: ROWID })

      return { success: true, data: response }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo habilitar al cliente', code: '003' }
    }
  }

  async delete (ROWID: number): Promise<Response> {
    try {
      const valuesToUpdate = { status: 0 }
      const response = await Turso.updateQuery(this.#table, valuesToUpdate, { field: 'ROWID', value: ROWID })

      return { success: true, data: response }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo eliminar al cliente', code: '003' }
    }
  }

  async page (pageNumber: number, limit: number): Promise<Response> {
    return await Turso.recordsPageQuery(this.#table, 'ROWID', 'ASC', pageNumber, limit)
  }
}

export default new Student()
