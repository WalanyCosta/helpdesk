import { CloudSaveCallParam, CloudSaveStore } from '../../../domain/protocols/cloud-save-store'
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore'
import { app } from '../config/app'
import { FindAllCall } from '../../../domain/protocols/find-all-call'

export class CloudFirebaseStore implements CloudSaveStore, FindAllCall {
  private readonly connectionWithFirestore = getFirestore(app)

  async save (param: CloudSaveCallParam): Promise<any> {
    try {
      await addDoc(collection(this.connectionWithFirestore, 'call'), {
        ...param
      })
    } catch (error) {

    }
  }

  async getAll (): Promise<any> {
    const refCollection = collection(this.connectionWithFirestore, 'call')
    try {
      const response = await getDocs(refCollection)
      return this.mapDatas(response)
    } catch (error) {
      return error.code
    }
  }

  private mapDatas (response): any {
    const calls = []
    response.forEach((doc) => {
      calls.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return calls
  }
}
