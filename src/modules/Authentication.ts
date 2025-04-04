import '../static/firebaseSDK.js'
import { getAuth } from 'firebase-admin/auth'
import { config } from 'dotenv'
config()

class Autenticacion {
  constructor () {
    this.#auth = getAuth()
  }

  #auth

  async #addClaims (uid: string, info: object): Promise<void> {
    return await this.#auth.setCustomUserClaims(uid, info)
  }

  async addUser (name: string, email: string, password: string): Promise<string> {
    const { uid } = await this.#auth
      .createUser({
        displayName: name,
        password,
        email,
        emailVerified: true,
        disabled: false
      })

    await this.#addClaims(uid, { role: 'student' })

    return uid
  }
}

export default new Autenticacion()
