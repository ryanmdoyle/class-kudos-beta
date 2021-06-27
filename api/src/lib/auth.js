import { AuthenticationError } from '@redwoodjs/api'
import admin from 'firebase-admin'

import { db } from './db'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const adminApp = admin.initializeApp(config)

// eslint-disable-next-line no-unused-vars
export const getCurrentUser = async (decoded, { token, type }) => {
  const verifiedGoogleUser = await adminApp.auth().verifyIdToken(token)
  const userInDb = await db.user.findUnique({
    where: { uid: verifiedGoogleUser.uid },
  })
  if (userInDb === null) {
    // Below check for a name (sometimes not returned from firebase?)
    const first = verifiedGoogleUser?.name
      ? verifiedGoogleUser?.name?.split(' ')[0]
      : verifiedGoogleUser?.email
    const last = verifiedGoogleUser?.name
      ? verifiedGoogleUser?.name?.split(' ')[1]
      : ''
    const newUser = await db.user.create({
      data: {
        firstName: first,
        lastName: last,
        email: verifiedGoogleUser?.email || '',
        uid: verifiedGoogleUser.uid,
        profileImage: verifiedGoogleUser.picture,
      },
    })
    newUser.roles = null
    return newUser
  }
  if (verifiedGoogleUser.picture !== userInDb.profileImage) {
    await db.user.update({
      data: {
        profileImage: verifiedGoogleUser.picture
      },
      where: { id: userInDb.id },
    })
  }
  userInDb.roles = null
  const userRoles = await db.user
    .findUnique({ where: { id: userInDb.id } })
    .roles()
  if (userRoles.length > 0) {
    const populatedRoles = userRoles.map((role) => role.name)
    userInDb.roles = populatedRoles
  }
  return userInDb
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.
export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
