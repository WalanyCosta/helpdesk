import { EmailAlreadyInUseError } from '../error/email-already-in-use'
import { ServerError } from '../error/server-error'
import { AccountModel } from '../model/account'
import { AddAccount, AddAccountParam } from '../protocols/add-account'
import { CreateAccount } from '../protocols/create-account'

export class FirebaseAddAccount implements AddAccount {
  constructor (private readonly createAccount: CreateAccount) {}

  async add (param: AddAccountParam): Promise<AccountModel> {
    const response = await this.createAccount.add(param)
    if (response.code === 'auth/email-already-in-use') {
      throw new EmailAlreadyInUseError()
    }

    if (response?.code) {
      throw new ServerError()
    }

    return {
      name: 'any_email'
    }
  }
}
