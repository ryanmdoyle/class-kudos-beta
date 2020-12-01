import { AuthenticationError } from '@redwoodjs/api'
import admin from 'firebase-admin'

import { db } from './db'
import { userRolesById } from 'src/services/userRoles/userRoles'

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
  const userInDb = await db.user.findOne({
    where: { uid: verifiedGoogleUser.uid },
  })
  if (userInDb === null) {
    const newUser = await db.user.create({
      data: {
        firstName: verifiedGoogleUser.name.split(' ')[0],
        lastName: verifiedGoogleUser.name.split(' ')[1],
        email: verifiedGoogleUser.email,
        uid: verifiedGoogleUser.uid,
        profileImage: verifiedGoogleUser.picture,
      },
    })
    newUser.roles = null
    return newUser
  }
  userInDb.roles = null
  const userRoles = await userRolesById(userInDb.id)
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
