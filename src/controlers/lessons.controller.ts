export const availableDays = async (req: any, res: any): Promise<void> => {
  return res.send({ success: true, data: { days: [1, 3, 5, 7, 10, 12, 14, 16, 17, 20, 25, 28] } })
}
