export class EmailAlreadyInUseError extends Error {
  constructor () {
    super('O Email já existe! Por favor digite outro email')
    this.name = 'EmailAlreadyInUseError'
  }
}
