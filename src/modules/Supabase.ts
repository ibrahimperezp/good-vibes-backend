import supabase from '../static/supabaseClient.js'
import { config } from 'dotenv'
// import { Response } from '../types.js'
config()

class Supabase {
  async addUser (name: string, email: string, password: string, customClaims: { [key: string]: unknown }): Promise<unknown> {
    const { data, error } = await supabase.auth.signUp({ name, email, password, options: { data: customClaims } })
    if (error !== null) {
      return { success: false, error }
    } else return { success: true, data }
  }
/*
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
  */
}

export default new Supabase()
