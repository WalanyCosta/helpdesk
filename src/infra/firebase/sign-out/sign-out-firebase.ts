import { Auth, signOut } from 'firebase/auth'
import { CloudLogoutAccount } from '../../../domain/protocols/cloud-logout-account'

export class SignOutFirebase implements CloudLogoutAccount {
  constructor (private readonly connectionWithAuth: Auth) {}

  async logout (): Promise<any> {
    try {
      await signOut(this.connectionWithAuth)
      return ''
    } catch (error) {
      return {
        code: error.code
      }
    }
  }
}
