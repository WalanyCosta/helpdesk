export interface ResetPassword {
  reset: (email) => Promise<string>
}
