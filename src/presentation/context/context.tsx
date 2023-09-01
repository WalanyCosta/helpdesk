import { createContext } from 'react'
import { CallModel } from '../../domain/model/calls'

type ContextProps = {
  valueDetails: CallModel
  filter: 'close' | 'open' | 'default'
  setFilter: (param: React.SetStateAction<'close' | 'open' | 'default'>) => void
}

export const Context = createContext<ContextProps>(null)
