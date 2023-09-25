import { ServerError } from '../error/server-error'
import { returnsDateNowInFormatUTF } from '../helper/returns-date-now-format-utf'
import { CloudSaveStore } from '../protocols/cloud-save-store'
import { SaveCall, SaveCallParam } from '../protocols/save-call'

export class CloudSaveCall implements SaveCall {
  constructor (private readonly cloudSaveStore: CloudSaveStore) {}

  async save (param: SaveCallParam): Promise<void> {
    const response = await this.cloudSaveStore.save({
      ...param,
      dateStart: returnsDateNowInFormatUTF(),
      status: 'open'
    })

    if (response?.code) {
      throw new ServerError()
    }
  }
}
