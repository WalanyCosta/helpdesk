import { Auth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc, Firestore } from 'firebase/firestore'
import { CreateAccount, CreateAccountParam } from '../../../domain/protocols/create-account'

export class CreateAccountWithFirebase implements CreateAccount {
  constructor (
    private readonly connectionWithAuth: Auth,
    private readonly connectionWithFirestore: Firestore
  ) {}

  async add (param: CreateAccountParam): Promise<any> {
    const collection = 'users'
    try {
      const response = await createUserWithEmailAndPassword(
        this.connectionWithAuth,
        param.email,
        param.password
      )
      await setDoc(doc(
        this.connectionWithFirestore,
        collection,
        response.user.uid
      ), {
        name: param.name
      })
    } catch (error) {
      return {
        code: error.code
      }
    }
  }
}
