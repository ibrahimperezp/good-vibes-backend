export const saveNewItem = async (req: any, res: any): Promise<void> => {
  return res.send({ success: true })
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
