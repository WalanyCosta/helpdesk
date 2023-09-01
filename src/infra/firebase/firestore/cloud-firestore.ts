import { CloudSaveCallParam, CloudSaveStore } from '../../../domain/protocols/cloud-save-store'
import { getFirestore, addDoc, collection, getDocs, where, query } from 'firebase/firestore'
import { app } from '../config/app'
import { FindCallsByStatus } from '../../../domain/protocols/find-calls-by-status'

export class CloudFirebaseStore implements CloudSaveStore, FindCallsByStatus {
  private readonly connectionWithFirestore = getFirestore(app)

  async save (param: CloudSaveCallParam): Promise<any> {
    try {
      await addDoc(collection(this.connectionWithFirestore, 'call'), {
        ...param
      })
    } catch (error) {

    }
  }

  async find (status: string): Promise<any> {
    const refCollection = collection(this.connectionWithFirestore, 'call')
    let queryInCall: any = refCollection
    if (status !== 'default') { queryInCall = query(refCollection, where('status', '==', status)) }
    return await getDocs(queryInCall)
      .then((data) => this.mapDatas(data))
      .catch((error) => error.code)
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
