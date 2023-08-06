export class InvalidPasswordError extends Error {
  constructor () {
    super('A sua senha está incorreta! Por favor inserá novamente.')
    this.name = 'InvalidPasswordError'
  }
}
