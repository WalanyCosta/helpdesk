import { CallModel } from '../model/calls'

export interface LoadCalls {
  load: () => Promise<CallModel[]>
}
