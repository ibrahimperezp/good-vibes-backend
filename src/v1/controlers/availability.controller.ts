const readAvailabilityPage = async (req: any, res: any): Promise<void> => {
  const availability = [{
    id: 'a34324',
    teacher: 'Pedro',
    date: '2025-04-13',
    time: [12, 13, 20]
  }]
  return res.status(400).json({ success: true, data: { availability } })
}

export const AvailabilityController = {
  readAvailabilityPage
}
