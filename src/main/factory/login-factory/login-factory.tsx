import React from 'react'
import { Login } from '../../../presentation/screen/login'
import { FirebaseAuthentication } from '../../../domain/services/firebase-authentication'
import { SignInWithPassword } from '../../../infra/firebase/authentication/signin-with-password'

const makeSignInPassword = new SignInWithPassword()
const makeFirebaseAuthentication = new FirebaseAuthentication(makeSignInPassword)

export function LoginFactory () {
  return (
    <Login authentication={makeFirebaseAuthentication}/>
  )
}
