import React from 'react'
import { ZodValidation } from '../../../validation/zod-validator'
import { Home } from '../../../presentation/screen/home'
import { CloudSaveCall } from '../../../domain/services/cloud-save-call'
import { CloudFirebaseStore } from '../../../infra/firebase/firestore/cloud-firestore'
import { RemoteLoadCalls } from '../../../domain/services/remote-load-calls'
import { ConnectionWithAuth, ConnectionWithFirestore } from '../../config/app'
import { SignOutFirebase } from '../../../infra/firebase/sign-out/sign-out-firebase'
import { RemoteLogoutAccount } from '../../../domain/services/remote-logout-account'

const makeZodValidation = new ZodValidation()
const makeFirebaseStore = new CloudFirebaseStore(ConnectionWithFirestore)
const makeSignOutFirebase = new SignOutFirebase(ConnectionWithAuth)
const makeCloudSaveStore = new CloudSaveCall(makeFirebaseStore)
const makeRemoteLoadCalls = new RemoteLoadCalls(makeFirebaseStore)
const makeRemoteLogoutAccount = new RemoteLogoutAccount(makeSignOutFirebase)

export function HomeFactory () {
  return (
    <Home
      validation={makeZodValidation}
      saveCall={makeCloudSaveStore}
      loadCalls={makeRemoteLoadCalls}
      logoutAccount={makeRemoteLogoutAccount}
    />
  )
}
