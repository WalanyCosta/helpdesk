import { CallModel } from '../model/calls'

export interface LoadCalls {
  loadByStatus: (status: string) => Promise<CallModel[]>
}
