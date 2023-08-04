import { InvalidPassword } from '../error/invalid-password'
import { UserNotFoundError } from '../error/user-not-found-error'
import { AccountModel } from '../model/account'
import { Authentication, AuthenticationParam } from '../protocols/authentication'
import { FirebaseAuth } from '../protocols/firebase-auth'

export class FirebaseAuthentication implements Authentication {
  constructor (private readonly firebaseAuth: FirebaseAuth) { }

  async auth (param: AuthenticationParam): Promise<AccountModel> {
    const response = await this.firebaseAuth.signIn(param.email, param.password)

    if (response?.code === 'auth/user-not-found') {
      throw new UserNotFoundError()
    }

    if (response?.code === 'auth/wrong-password') {
      throw new InvalidPassword()
    }

    return null
  }
}
