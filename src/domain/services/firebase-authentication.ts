import { InvalidPassword } from '../error/invalid-password'
import { ServerError } from '../error/server-error'
import { UserNotFoundError } from '../error/user-not-found-error'
import { AccountModel } from '../model/account'
import { Authentication, AuthenticationParam } from '../protocols/authentication'
import { FirebaseSignIn } from '../protocols/firebase-signin'

export class FirebaseAuthentication implements Authentication {
  constructor (private readonly firebaseAuth: FirebaseSignIn) { }

  async auth (param: AuthenticationParam): Promise<AccountModel> {
    const response = await this.firebaseAuth.signIn(param.email, param.password)

    if (response?.code === 'auth/user-not-found') {
      throw new UserNotFoundError()
    }

    if (response?.code === 'auth/wrong-password') {
      throw new InvalidPassword()
    }

    if (response?.code !== '') {
      throw new ServerError()
    }

    return {
      name: 'any_name'
    }
  }
}
