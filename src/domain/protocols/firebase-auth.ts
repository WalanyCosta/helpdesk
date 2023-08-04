export interface FirebaseAuth {
  signIn: (email: string, password: string) => Promise<any>
}
