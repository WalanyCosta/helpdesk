import { ServerError } from '../error/server-error'
import { CallModel } from '../model/calls'
import { FindAllCall } from '../protocols/find-all-call'
import { LoadCalls } from '../protocols/load-calls'

export class RemoteLoadCalls implements LoadCalls {
  constructor (private readonly findAllCall: FindAllCall) {}

  async load (): Promise<CallModel[]> {
    const response = await this.findAllCall.getAll()
    const calls = response as CallModel[] || []
    if (response?.code) {
      throw new ServerError()
    }
    return calls.map((call) => Object.assign(call, { dateStart: new Date(call.dateStart) }))
  }

  converteDate
}
