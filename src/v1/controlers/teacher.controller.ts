
import { Teacher } from '../modules'

const updateTeacherName = async (req: any, res: any): Promise<void> => {
  try {
    const { name, ROWID }: { name: string, ROWID: number } = req.body
    const response = await Teacher.updateName(name, ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo editar al cliente', code: '004' })
  }
}

const updateTeacherEmail = async (req: any, res: any): Promise<void> => {
  try {
    const { email, ROWID }: { email: string, ROWID: number } = req.body
    const response = await Teacher.updateEmail(email, ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo editar al cliente', code: '004' })
  }
}

const updateTeacherDescription = async (req: any, res: any): Promise<void> => {
  try {
    const { description, ROWID }: { description: string, ROWID: number } = req.body
    const response = await Teacher.updateDescription(description, ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo editar al cliente', code: '004' })
  }
}

const updateTeacherPicture = async (req: any, res: any): Promise<void> => {
  try {
    const { picture, number, ROWID }: { picture: string, number: number, ROWID: number } = req.body
    const response = await Teacher.updatePicture(picture, number, ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo editar al cliente', code: '004' })
  }
}

const disableTeacher = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID }: { ROWID: number } = req.body
    const response = await Teacher.disable(ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

const enableTeacher = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID }: { ROWID: number } = req.body
    const response = await Teacher.enable(ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescriprion: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

const deleteTeacher = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID }: { ROWID: number } = req.body
    const response = await Teacher.delete(ROWID)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

const registerTeacher = async (req: any, res: any): Promise<void> => {
  try {
    const { name, email, description, pictures }: { name: string, email: string, description: string, pictures: [string, string, string, string, string] } = req.body
    const response = await Teacher.register(name, email, description, pictures)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo agregar al cliente', code: '006' })
  }
}

const teacherPage = async (req: any, res: any): Promise<void> => {
  try {
    const { pageNumber, limit }: { pageNumber: number, limit: number } = req.body

    const response = await Teacher.page(pageNumber, limit)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'Error en servidor: No se pudo leer la pagina de Usuarios' })
  }
}

export const TeacherController = {
  updateTeacherName,
  updateTeacherEmail,
  updateTeacherDescription,
  enableTeacher,
  disableTeacher,
  updateTeacherPicture,
  deleteTeacher,
  registerTeacher,
  teacherPage
}
