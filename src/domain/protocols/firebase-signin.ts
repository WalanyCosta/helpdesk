export interface FirebaseSignIn {
  signIn: (email: string, password: string) => Promise<any>
}
