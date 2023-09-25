export type SaveCallParam = {
  deviceType: string
  numberDevice: string
  description: string
}

export interface SaveCall {
  save: (param: SaveCallParam) => Promise<void>
}
