import React from 'react'
import { Login } from '../../../presentation/screen/login'
import { FirebaseAuthentication } from '../../../domain/services/firebase-authentication'
import { SignInWithPassword } from '../../../infra/firebase/authentication/signin-with-password'
import { ZodValidation } from '../../../validation/zod-validator'

const makeSignInPassword = new SignInWithPassword()
const makeFirebaseAuthentication = new FirebaseAuthentication(makeSignInPassword)
const makeZodValidation = new ZodValidation()

export function LoginFactory () {
  return (
    <Login
      validator={makeZodValidation}
      authentication={makeFirebaseAuthentication}
    />
  )
}
