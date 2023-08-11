import { ServerError } from '../error/server-error'
import { FirebaseResetPassword } from '../protocols/firebase-reset-password'
import { ResetPassword } from '../protocols/reset-password'

export class ResetPasswordByEmail implements ResetPassword {
  constructor (private readonly firebaseResetPassword: FirebaseResetPassword) {}

  async reset (email: string): Promise<string> {
    const response = await this.firebaseResetPassword.reset(email)
    if (response?.code) {
      throw new ServerError()
    }

    return response
  }
}
