import { AuthProvider } from '@redwoodjs/auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const firebaseClientConfig = {
  apiKey: 'AIzaSyCnCV3srejxuRdGDUP8f90GfhmGxLT0IdY', //process.env.FIREBASE_API_KEY,
  authDomain: 'class-karma.firebaseapp.com', //process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://class-karma.firebaseio.com', //process.env.FIREBASE_DATABASE_URL,
  projectId: 'class-karma', //process.env.FIREBASE_PROJECT_ID,
  storageBucket: 'class-karma.appspot.com', //process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: '229408645806', //process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: '1:229408645806:web:3c32725365fcc19274833f', //process.env.FIREBASE_APP_ID,
}

const firebaseClient = ((config) => {
  firebase.initializeApp(config)
  return firebase
})(firebaseClientConfig)

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={firebaseClient} type="firebase">
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
