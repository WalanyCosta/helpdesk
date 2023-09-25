export type CloudSaveCallParam = {
  deviceType: string
  numberDevice: string
  description: string
  dateStart: string
  status: string
}

export interface CloudSaveStore {
  save: (param: CloudSaveCallParam) => Promise<any>
}
