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
