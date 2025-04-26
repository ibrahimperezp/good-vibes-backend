export const availableDays = async (req: any, res: any): Promise<void> => {
  return res.send({ success: true, data: { days: [1, 3, 5, 7, 10, 12, 14, 16, 17, 20, 25, 28] } })
}

export const timeRange = async (req: any, res: any): Promise<void> => {
  const range = {
    min: 1,
    max: 6,
    step: 30
  }
  return res.send({ success: true, data: { range } })
}

export const lessonsCount = async (req: any, res: any): Promise<void> => {
  const count = {
    active: 20,
    canceled: 6,
    given: 30
  }
  return res.send({ success: true, data: { count } })
}

export const readLessonsPage = async (req: any, res: any): Promise<void> => {
  const lessons = [{
    creationDate: '2025-04-04',
    scheduleDate: '2025-04-13',
    teacher: 'Ramon Pérez',
    duration: '2 hours',
    credits: '100',
    id: '343',
    studentDescription: 'this a description set by the student',
    meetingLink: 'http://meet.com'
  }]
  return res.send({ success: true, data: { lessons } })
}
