export class InvalidPassword extends Error {
  constructor () {
    super('A sua senha está incorreta! Por favor inserá novamente.')
    this.name = 'InvalidPassword'
  }
}
