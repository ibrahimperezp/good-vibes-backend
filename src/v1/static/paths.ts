export const API_VERSION_PATH = {
  v1: '/api/v1'
}

export const SEGEMENT_PATH = {
  log: '/log',
  student: '/student',
  teacher: '/teacher',
  store: '/store',
  availability: '/availability',
  lesson: '/lesson',
  invoice: '/invoice'
}

export const INVOICE_PATH = {
  read: {
    amountByMonth: '/amount-by-month',
    page: '/page'
  }
}

export const AVAILABILITY_PATH = {
  read: {
    page: '/page'
  }
}

export const LESSON_PATH = {
  read: {
    availableDays: '/available-days',
    timeRange: '/time-range',
    count: '/count',
    page: '/page'
  }
}

export const LOG_PATH = {
  read: {
    students: '/students'
  }
}

export const ITEM_PATH = {
  create: '/create',
  read: {
    page: '/page',
    report: {
      byId: '/by-id',
      byDate: '/by-date'
    }
  },
  update: '/update'
}

export const STUDENT_PATH = {
  create: '/create',
  read: {
    page: '/page',
    credits: '/credits',
    lastClass: '/last-class',
    invoicePage: '/invoice-page',
    teachers: '/teachers',
    activeLessons: '/active-lessons'
  },
  update: {
    name: '/name',
    status: '/status'
  },
  delete: '/delete'
}

export const TEACHER_PATH = {
  create: '/create',
  read: {
    page: '/read/page'
  },
  update: {
    status: '/status',
    name: '/name',
    description: '/description',
    email: '/email',
    picture: '/picture'
  },
  delete: '/delete'
}
