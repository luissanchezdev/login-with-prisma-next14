const createErrorFactory = function (name: string) {
  return class BusinessError extends Error {
    constructor(message: string, statusCode : number) {
      super(message)
      this.name = name
    }
  }
}

// Este es el método creando una por una las clase de error
/* export class ValidationNickNameError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationNickNameError'
  }
}

export class ValidationEmailError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationEmailError'
  }
} */

export const ValidationNickNameError = createErrorFactory('ValidationNickNameError')

export const ValidationEmailError = createErrorFactory('ValidationEmailError')

export default {
  ValidationNickNameError,
  ValidationEmailError
}