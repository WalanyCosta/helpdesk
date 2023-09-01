export interface FindCallsByStatus {
  find: (status: string) => Promise<any>
}
