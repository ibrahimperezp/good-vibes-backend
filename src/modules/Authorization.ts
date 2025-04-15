import { Response } from '../types'
import Turso from './Turso'

class Authorization {
  async getUserRol (ROWID: number): Promise<Response> {
    try {
      const response = await Turso.queryWithArguments('SELECT id_rol FROM user WHERE ROWID = ? LIMIT 1;', [ROWID])
      if (response.success) return { success: true, data: { idRol: response.data.records[0].id_rol } }
      return { success: false, errorDescription: 'No se pudo editar al cliente' }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo editar al cliente', code: '003' }
    }
  }

  async getRolPermissions (ROWID: number): Promise<Response> {
    try {
      const response = await Turso.queryWithArguments(
        'SELECT (activity.name) FROM activity INNER JOIN rol_activity ON rol_activity.id_rol=?',
        [ROWID]
      )
      if (response.success) return { success: true, data: response.data.records }
      return { success: false, errorDescription: 'No se pudo editar al cliente' }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo editar al cliente', code: '003' }
    }
  }

  async checkIfIsAutorized (ROWID: number): Promise<Response> {
    try {
      const response = await Turso.queryWithArguments(
        'SELECT (activity.name) FROM activity ' +
        'INNER JOIN rol_activity ON activity.ROWID=rol_activity.id_activity ' +
        'AND rol_activity.id_rol=user.id_rol ' +
        'INNER JOIN user ON user.ROWID=?',
        [ROWID]
      )
      if (response.success) return { success: true, data: response.data.records }
      return { success: false, errorDescription: 'No se pudo editar al cliente' }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo editar al cliente', code: '003' }
    }
  }
}

export default new Authorization()
