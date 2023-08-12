export interface FirebaseResetPassword {
  reset: (email: string) => Promise<any>
}
