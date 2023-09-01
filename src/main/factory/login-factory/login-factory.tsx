import React from 'react'
import { Login } from '../../../presentation/screen/login'
import { FirebaseAuthentication } from '../../../domain/services/firebase-authentication'
import { SignInWithPassword } from '../../../infra/firebase/authentication/signin-with-password'
import { ZodValidation } from '../../../validation/zod-validator'
import { SendPasswordResetEmail } from '../../../infra/firebase/send-password-reset-email/send-password-reset-email'
import { ResetPasswordByEmail } from '../../../domain/services/reset-password-by-email'
import { ConnectionWithAuth } from '../../config/app'

const makeSignInPassword = new SignInWithPassword(ConnectionWithAuth)
const makeFirebaseAuthentication = new FirebaseAuthentication(makeSignInPassword)
const makeZodValidation = new ZodValidation()
const makeSendPasswordResetemail = new SendPasswordResetEmail()
const makeResetPasswordByEmail = new ResetPasswordByEmail(makeSendPasswordResetemail)

export function LoginFactory () {
  return (
    <Login
      validator={makeZodValidation}
      authentication={makeFirebaseAuthentication}
      resetPassword={makeResetPasswordByEmail}
    />
  )
}
