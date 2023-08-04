import { AccountModel } from '../model/account'

export type AuthenticationParam = {
  email: string
  password: string
}

export interface Authentication {
  auth: (param: AuthenticationParam) => Promise<AccountModel>
}
