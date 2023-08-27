import React from 'react'
import { ZodValidation } from '../../../validation/zod-validator'
import { Home } from '../../../presentation/screen/home'
import { CloudSaveCall } from '../../../domain/services/cloud-save-call'
import { CloudFirebaseStore } from '../../../infra/firebase/firestore/cloud-firestore'
import { RemoteLoadCalls } from '../../../domain/services/remote-load-calls'

const makeZodValidation = new ZodValidation()
const makeFirebaseStore = new CloudFirebaseStore()
const makeCloudSaveStore = new CloudSaveCall(makeFirebaseStore)
const makeRemoteLoadCalls = new RemoteLoadCalls(makeFirebaseStore)

export function HomeFactory () {
  return (
    <Home
      validation={makeZodValidation}
      saveCall={makeCloudSaveStore}
      loadCalls={makeRemoteLoadCalls}
    />
  )
}
