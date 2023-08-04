import { app } from '../config/app'
import { FirebaseSignIn } from '../../../domain/protocols/firebase-signin'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

export class SignInWithPassword implements FirebaseSignIn {
  async signIn (email: string, password: string): Promise<any> {
    try {
      const response = await signInWithEmailAndPassword(getAuth(app), email, password)
      console.log(response)
      return {
        name: 'any_name'
      }
    } catch (error) {
      console.log(error.code.toString())
      return {
        code: error.code
      }
    }
  }
}
