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
