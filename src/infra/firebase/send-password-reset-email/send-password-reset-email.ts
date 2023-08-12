import { FirebaseResetPassword } from '../../../domain/protocols/firebase-reset-password'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

export class SendPasswordResetEmail implements FirebaseResetPassword {
  async reset (email: string): Promise<any> {
    try {
      await sendPasswordResetEmail(getAuth(), email)
      return 'Envia-mos um email para você, por favor confere'
    } catch (err) {
      return err.code
    }
  }
}
