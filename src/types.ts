export interface SuccessfullyResponse {
  success: true
  data: { [key: string]: any }
}

export interface FailedResponse {
  success: false
  errorDescription: string
  code?: string
}

export type Response = SuccessfullyResponse | FailedResponse

export type PrimitiveDataType =
  | 'undefined'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'symbol'
  | 'string'
  | 'null'
  | 'object'

export type Orientation = 'ASC' | 'DESC'

export interface Pagination {
  first: number
  previous: number
  current: number
  total: number
  next: number
  last: number
}
