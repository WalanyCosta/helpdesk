import { ServerError } from '../error/server-error'
import { CallModel } from '../model/calls'
import { FindCallsByStatus } from '../protocols/find-calls-by-status'
import { LoadCalls } from '../protocols/load-calls'

export class RemoteLoadCalls implements LoadCalls {
  constructor (private readonly findAllCall: FindCallsByStatus) {}

  async loadByStatus (status: string): Promise<CallModel[]> {
    const response = await this.findAllCall.find(status)
    const calls = response as CallModel[] || []
    if (response?.code) {
      throw new ServerError()
    }
    return calls.map((call) => Object.assign(call, { dateStart: new Date(call.dateStart) }))
  }
}
