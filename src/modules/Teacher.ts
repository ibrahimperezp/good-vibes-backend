import { Response } from '../types.js'
import { Turso } from './'

class Teacher {
  #table = 'teacher'

  async register (name: string, email: string, description: string, pictures: [string, string, string, string, string]): Promise<Response> {
    try {
      const valuesToInsert = {
        name,
        email,
        description,
        featured_picture: pictures[0],
        picture_1: pictures[1],
        picture_2: pictures[2],
        picture_3: pictures[3],
        picture_4: pictures[4]
      }
      const response = await Turso.insertQuery(this.#table, valuesToInsert)

      if (response.success) {
        const { ROWID } = response.data.records[0]
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

  async updateEmail (email: string, ROWID: number): Promise<Response> {
    try {
      const valuesToUpdate = { email }
      const response = await Turso.updateQuery(this.#table, valuesToUpdate, { field: 'ROWID', value: ROWID })

      return { success: true, data: response }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo editar al cliente', code: '003' }
    }
  }

  async updateDescription (description: string, ROWID: number): Promise<Response> {
    try {
      const valuesToUpdate = { description }
      const response = await Turso.updateQuery(this.#table, valuesToUpdate, { field: 'ROWID', value: ROWID })

      return { success: true, data: response }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo editar al cliente', code: '003' }
    }
  }

  async updatePicture (picture: string, number: number, ROWID: number): Promise<Response> {
    try {
      const valuesToUpdate: { [key: string]: unknown } = { }
      if (number === 0) valuesToUpdate.featured_picture = picture
      else if (number === 1) valuesToUpdate.picture_1 = picture
      else if (number === 2) valuesToUpdate.picture_2 = picture
      else if (number === 3) valuesToUpdate.picture_3 = picture
      else if (number === 4) valuesToUpdate.picture_4 = picture

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

export default new Teacher()
