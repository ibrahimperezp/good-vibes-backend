import { Pagination } from '../../types'

export const createParamsForInsert = (table: string, data: { [key: string]: any }): { query: string, values: any[] } => {
  const values = []
  const fields = []
  const wildcards = []

  for (const field in data) {
    fields.push(field)
    values.push(data[field])
    wildcards.push('?')
  }

  const fieldsWithCommas = fields.join(',')
  const wildcardsWithCommas = wildcards.join(',')
  const query = `INSERT INTO ${table}(${fieldsWithCommas}) VALUES (${wildcardsWithCommas}) RETURNING ROWID;`

  return { query, values }
}

export const createParamsForUpdate = (table: string, data: { [key: string]: any }, where: { field: string, value: unknown }): { query: string, values: any[] } => {
  const values = []
  const modifiers = []

  for (const field in data) {
    modifiers.push(` ${field} = ?`)
    values.push(data[field])
  }

  values.push(where.value)
  const modifiersWithCommas = modifiers.join(', ')
  const query = `UPDATE ${table} SET ${modifiersWithCommas} WHERE ${where.field} = ?;`

  return { query, values }
}

export const calculatePagination = (totalRecords: number, pagina: number, limite: number): Pagination => {
  totalRecords = totalRecords - 0
  pagina = pagina - 0
  limite = limite - 0

  const pagination = {
    first: 0,
    previous: 0,
    current: 0,
    total: 0,
    next: 0,
    last: 0
  }

  if (totalRecords > 0) {
    const recordsPerPage = limite
    const pages = (totalRecords / recordsPerPage)
    let pagesQuantity = Math.trunc(pages)

    if (pagesQuantity !== pages) ++pagesQuantity

    if (pagesQuantity >= pagina) {
      pagination.total = pagesQuantity

      if (pagesQuantity === 1) {
        pagination.current = 1
      } else {
        pagination.first = pagina > 1 ? 1 : 0
        pagination.previous = pagina > 1 ? pagina - 1 : 0

        pagination.current = pagina

        pagination.last = pagesQuantity > pagina ? pagesQuantity : 0
        pagination.next = pagesQuantity > pagina ? pagina + 1 : 0
      }
    }
  }

  return pagination
}
