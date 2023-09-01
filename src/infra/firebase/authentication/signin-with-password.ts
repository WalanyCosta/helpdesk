import { FirebaseSignIn } from '../../../domain/protocols/firebase-signin'
import { signInWithEmailAndPassword, Auth } from 'firebase/auth'

export class SignInWithPassword implements FirebaseSignIn {
  constructor (private readonly connectionWithAuth: Auth) {}

  async signIn (email: string, password: string): Promise<any> {
    try {
      await signInWithEmailAndPassword(
        this.connectionWithAuth,
        email,
        password
      )
      return {
        name: 'any_name'
      }
    } catch (error) {
      return {
        code: error.code
      }
    }
  }
}
