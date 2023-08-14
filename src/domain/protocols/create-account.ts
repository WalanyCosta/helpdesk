export type CreateAccountParam = {
  name: string
  email: string
  password: string
}

export interface CreateAccount {
  add: (param: CreateAccountParam) => Promise<any>
}
