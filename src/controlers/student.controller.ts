
import { Student } from '../modules'

export const updateStudentName = async (req: any, res: any): Promise<void> => {
  try {
    const { name, ROWID }: { name: string, ROWID: number } = req.body
    const response = await Student.updateName(name, ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo editar al cliente', code: '004' })
  }
}

export const disableStudent = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID }: { ROWID: number } = req.body
    const response = await Student.disable(ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

export const enableStudent = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID }: { ROWID: number } = req.body
    const response = await Student.enable(ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescriprion: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

export const deleteStudent = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID }: { ROWID: number } = req.body
    const response = await Student.delete(ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

export const registerStudent = async (req: any, res: any): Promise<void> => {
  try {
    const { name, email }: { name: string, email: string } = req.body
    const response = await Student.register(name, email)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo agregar al cliente', code: '006' })
  }
}

export const studentPage = async (req: any, res: any): Promise<void> => {
  try {
    const { pageNumber, limit }: { pageNumber: number, limit: number } = req.body

    const response = await Student.page(pageNumber, limit)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'Error en servidor: No se pudo leer la pagina de Usuarios' })
  }
}
