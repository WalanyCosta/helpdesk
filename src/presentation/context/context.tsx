import { createContext } from 'react'
import { CallModel } from '../../domain/model/calls'

type ContextProps = {
  valueDetails: CallModel
}

export const Context = createContext<ContextProps>(null)
