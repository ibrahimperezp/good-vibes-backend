
import { Teacher } from '../modules'

export const disableTeacher = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID }: { ROWID: number } = req.body
    const response = await Teacher.disable(ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

export const enableTeacher = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID }: { ROWID: number } = req.body
    const response = await Teacher.enable(ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescriprion: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

export const deleteTeacher = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID }: { ROWID: number } = req.body
    const response = await Teacher.delete(ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

export const registerTeacher = async (req: any, res: any): Promise<void> => {
  try {
    const { name, email, description, pictures }: { name: string, email: string, description: string, pictures: [string, string, string, string, string] } = req.body
    const response = await Teacher.register(name, email, description, pictures)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo agregar al cliente', code: '006' })
  }
}

export const teacherPage = async (req: any, res: any): Promise<void> => {
  try {
    const { pageNumber, limit }: { pageNumber: number, limit: number } = req.body

    const response = await Teacher.page(pageNumber, limit)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'Error en servidor: No se pudo leer la pagina de Usuarios' })
  }
}
