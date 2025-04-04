import '../static/firebaseSDK.js'
import { getAuth } from 'firebase-admin/auth'
import { config } from 'dotenv'
import { Response } from '../types.js'
config()

class Firebase {
  constructor () {
    this.#auth = getAuth()
  }

  #auth

  async #addClaims (uid: string, info: object): Promise<void> {
    return await this.#auth.setCustomUserClaims(uid, info)
  }

  async addUser (name: string, email: string, password: string, customClaims: { [key: string]: unknown }): Promise<string> {
    const { uid } = await this.#auth
      .createUser({
        displayName: name,
        password,
        email,
        emailVerified: true,
        disabled: false
      })

    await this.#addClaims(uid, customClaims)

    return uid
  }

  async disableUser (targetUid: string): Promise<Response> {
    return await this.#auth
      .updateUser(targetUid, { disabled: true })
      .then(() => {
        const r: Response = { success: true, data: {} }
        return r
      })
      .catch((error) => { return { success: false, errorDescription: '', code: error } })
  }

  async enableUser (targetUid: string): Promise<Response> {
    return await this.#auth
      .updateUser(targetUid, { disabled: false })
      .then(() => {
        const r: Response = { success: true, data: {} }
        return r
      })
      .catch((error) => { return { success: false, errorDescription: '', code: error } })
  }
}

export default new Firebase()
