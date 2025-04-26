export const totalAmount = async (req: any, res: any): Promise<void> => {
  return res.send({ success: true, data: { total: 20000 } })
}
