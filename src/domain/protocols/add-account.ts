import { AccountModel } from '../model/account'

export type AddAccountParam = {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add: (param: AddAccountParam) => Promise<AccountModel>
}
