const totalAmount = async (req: any, res: any): Promise<void> => {
  return res.send({ success: true, data: { total: 20000 } })
}

const readInvoicePage = async (req: any, res: any): Promise<void> => {
  const invoices = [{
    id: 'a34324',
    amount: '200',
    purchaseDate: '2025-04-13',
    paymentMethod: 'stripe',
    items: [
      { name: 'package', price: '50', quantity: 2, id: '2359234', subtotal: '100' },
      { name: 'big package', price: '100', quantity: 1, id: '23344', subtotal: '100' }
    ]
  }]
  return res.send({ success: true, data: { invoices } })
}

export const InvoiceController = {
  totalAmount,
  readInvoicePage
}
