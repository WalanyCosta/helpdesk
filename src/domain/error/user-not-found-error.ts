export class UserNotFoundError extends Error {
  constructor () {
    super('O usuario não existe!')
    this.name = 'UserNotFoundError'
  }
}
