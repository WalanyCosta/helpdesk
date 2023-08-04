import { app } from '../config/app'
import { FirebaseSignIn } from '../../../domain/protocols/firebase-signin'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

export class SignInWithPassword implements FirebaseSignIn {
  async signIn (email: string, password: string): Promise<any> {
    try {
      return await signInWithEmailAndPassword(getAuth(app), email, password)
    } catch (error) {
      return error.code
    }
  }
}
