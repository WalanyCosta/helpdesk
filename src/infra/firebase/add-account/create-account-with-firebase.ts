import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { setDoc, doc, getFirestore } from 'firebase/firestore'
import { CreateAccount, CreateAccountParam } from '../../../domain/protocols/create-account'
import { app } from '../config/app'

export class CreateAccountWithFirebase implements CreateAccount {
  async add (param: CreateAccountParam): Promise<any> {
    const refDb = getFirestore(app)
    const collection = 'users'
    try {
      const response = await createUserWithEmailAndPassword(getAuth(app), param.email, param.password)
      await setDoc(doc(refDb, collection, response.user.uid), {
        name: param.name
      })
    } catch (error) {
      return {
        code: error.code
      }
    }
  }
}
