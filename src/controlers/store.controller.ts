export const saveNewItem = async (req: any, res: any): Promise<void> => {
  return res.send({ success: true })
}

export const editStoreItem = async (req: any, res: any): Promise<void> => {
  return res.send({ success: true })
}

export const buyCustomCreditAmount = async (req: any, res: any): Promise<void> => {
  return res.send({ success: true })
}

export const itemReport = async (req: any, res: any): Promise<void> => {
  const report = {
    sold: 20,
    name: 'package',
    gross: 1000,
    dates: [{ date: '2024-04-04', time: '4:23' }]
  }
  return res.send({ success: true, data: { report } })
}

export const dateReport = async (req: any, res: any): Promise<void> => {
  const report = [{
    sold: 20,
    name: 'package',
    gross: 1000,
    dates: [{ date: '2024-04-04', time: '4:23' }]
  }]
  return res.send({ success: true, data: { report } })
}

export const readItemPage = async (req: any, res: any): Promise<void> => {
  const itemPage = [
    {
      id: '2332',
      sku: 'asdasda',
      name: 'package',
      price: '100',
      taxes: '10',
      max: -1,
      min: 1,
      description: 'whatever',
      quantity: 1000
    }
  ]
  return res.send({ success: true, data: { itemPage } })
}
