import { CloudSaveCallParam, CloudSaveStore } from '../../../domain/protocols/cloud-save-store'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { app } from '../config/app'

export class CloudFirebaseStore implements CloudSaveStore {
  private readonly connectionWithFirestore = getFirestore(app)
  async save (param: CloudSaveCallParam): Promise<any> {
    try {
      await addDoc(collection(this.connectionWithFirestore, 'call'), {
        ...param
      })
    } catch (error) {

    }
  }
}
