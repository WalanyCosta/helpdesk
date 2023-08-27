import { CallModel } from '../model/calls'
import { FindAllCall } from '../protocols/find-all-call'
import { LoadCalls } from '../protocols/load-calls'

export class RemoteLoadCalls implements LoadCalls {
  constructor (private readonly findAllCall: FindAllCall) {}

  async load (): Promise<CallModel[]> {
    const response = await this.findAllCall.getAll()
    if (response?.code) throw new Error()
    return response as CallModel[]
  }
}
