import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAm5iJCoJpcIdZG3jX7kjvlyMnkZu41aag',
  authDomain: 'helpdesk-32024.firebaseapp.com',
  projectId: 'helpdesk-32024',
  storageBucket: 'helpdesk-32024.appspot.com',
  messagingSenderId: '169590282999',
  appId: '1:169590282999:web:56afba2154910a2ab211f2',
  measurementId: 'G-ZKZDQ4WYFZ'
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
