const readStudentsLog = async (req: any, res: any): Promise<void> => {
  const log = [{
    id: 'a34324',
    student: 'ramon',
    email: 'gmail',
    date: 'timestamp',
    action: 'scheduled a class'
  }]
  return res.send({ success: true, data: { log } })
}

export const LogController = {
  readStudentsLog
}
