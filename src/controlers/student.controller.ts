
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

export const studentCredits = async (req: any, res: any): Promise<void> => {
  return res.send({ success: true, data: { credits: 500 } })
}

export const studentTeachers = async (req: any, res: any): Promise<void> => {
  const teachers = [
    { name: 'Pedro' },
    { name: 'Miguel' },
    { name: 'Ramon' }
  ]
  return res.send({ success: true, data: { teachers } })
}

export const studentLastClass = async (req: any, res: any): Promise<void> => {
  const lastClass = {
    creationDate: '2025-04-04',
    scheduleDate: '2025-04-13',
    teacher: 'Ramon Pérez',
    duration: '2 hours',
    credits: '100',
    id: '343',
    studentDescription: 'this a description set by the student',
    meetingLink: 'http://meet.com'
  }
  return res.send({ success: true, data: { lastClass } })
}

export const studentInvoicePage = async (req: any, res: any): Promise<void> => {
  const invoices = {
    id: 'a34324',
    amount: '200',
    purchaseDate: '2025-04-13',
    paymentMethod: 'stripe',
    items: [
      { name: 'package', price: '50', quantity: 2, id: '2359234', subtotal: '100' },
      { name: 'big package', price: '100', quantity: 1, id: '23344', subtotal: '100' }
    ]
  }
  return res.send({ success: true, data: { invoices: [invoices] } })
}

export const disableStudent = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID, uid }: { ROWID: number, uid: string } = req.body
    const response = await Student.disable(ROWID, uid)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

export const enableStudent = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID, uid }: { ROWID: number, uid: string } = req.body
    const response = await Student.enable(ROWID, uid)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescriprion: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

export const deleteStudent = async (req: any, res: any): Promise<void> => {
  try {
    const { ROWID, uid }: { ROWID: number, uid: string } = req.body
    const response = await Student.delete(ROWID, uid)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, errorDescription: 'No se pudo deshabilitar al cliente', code: '004' })
  }
}

export const registerStudent = async (req: any, res: any): Promise<void> => {
  try {
    const { name, email, password, date }: { name: string, email: string, password: string, date: string } = req.body
    const response = await Student.register(name, email, password, date)
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
