export class ServerError extends Error {
  constructor () {
    super('Erro No Servidor')
    this.name = 'ServerError'
  }
}
