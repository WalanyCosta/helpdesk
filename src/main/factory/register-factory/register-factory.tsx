import React from 'react'
import { FirebaseAddAccount } from '../../../domain/services/firebase-add-account'
import { ZodValidation } from '../../../validation/zod-validator'
import { Register } from '../../../presentation/screen/register/index'
import { CreateAccountWithFirebase } from '../../../infra/firebase/add-account/create-account-with-firebase'

const makeCreateAccountWithFirebase = new CreateAccountWithFirebase()
const makeFirebaseAddAcount = new FirebaseAddAccount(makeCreateAccountWithFirebase)
const makeZodValidation = new ZodValidation()

export function RegisterFactory () {
  return (
    <Register
        addAccount={makeFirebaseAddAcount}
        validation={makeZodValidation}
    />
  )
}
