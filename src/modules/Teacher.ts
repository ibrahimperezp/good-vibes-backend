import { Response } from '../types.js'
import { Turso } from './'
import Storage from './Storage.js'

class Teacher {
  #table = 'teacher'

  async register (name: string, email: string, description: string, pictures: [string, string, string, string, string]): Promise<Response> {
    try {
      const pics = ['', '', '', '', '', '']

      if (pictures[0] !== undefined && pictures[0] !== '') {
        const response = await Storage.saveImage(pictures[0])
        if (response.success) pics[0] = response.data.url
      }

      if (pictures[1] !== undefined && pictures[1] !== '') {
        const response = await Storage.saveImage(pictures[1])
        if (response.success) pics[1] = response.data.url
      }

      if (pictures[2] !== undefined && pictures[2] !== '') {
        const response = await Storage.saveImage(pictures[2])
        if (response.success) pics[2] = response.data.url
      }

      if (pictures[3] !== undefined && pictures[3] !== '') {
        const response = await Storage.saveImage(pictures[3])
        if (response.success) pics[3] = response.data.url
      }

      if (pictures[4] !== undefined && pictures[4] !== '') {
        const response = await Storage.saveImage(pictures[4])
        if (response.success) pics[4] = response.data.url
      }

      console.log(pics)

      const valuesToInsert = {
        name,
        email,
        description,
        featured_picture: pics[0],
        picture_1: pics[1],
        picture_2: pics[2],
        picture_3: pics[3],
        picture_4: pics[4]
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
