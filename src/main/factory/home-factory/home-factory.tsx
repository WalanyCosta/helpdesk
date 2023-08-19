import React from 'react'
import { ZodValidation } from '../../../validation/zod-validator'
import { Home } from '../../../presentation/screen/home'
import { CloudSaveCall } from '../../../domain/services/cloud-save-call'
import { CloudFirebaseStore } from '../../../infra/firebase/firestore/cloud-firestore'

const makeZodValidation = new ZodValidation()
const makeFirebaseStore = new CloudFirebaseStore()
const makeCloudSaveStore = new CloudSaveCall(makeFirebaseStore)

export function HomeFactory () {
  return (
    <Home
      validation={makeZodValidation}
      saveCall={makeCloudSaveStore}
    />
  )
}
