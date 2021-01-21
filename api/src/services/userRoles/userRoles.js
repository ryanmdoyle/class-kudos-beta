import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { UserInputError } from '@redwoodjs/api'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const userRoles = () => {
  return db.userRole.findMany()
}

export const userRole = ({ id }) => {
  return db.userRole.findOne({
    where: { id },
  })
}

export const createUserRole = ({ input }) => {
  requireAuth()
  const roles = ['teacher', 'student']
  if (!roles.includes(input.name)) {
    throw new UserInputError('Role type invalid')
  }
  return db.userRole.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateUserRole = ({ id, input }) => {
  return db.userRole.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteUserRole = ({ id }) => {
  return db.userRole.delete({
    where: { id },
  })
}

export const UserRole = {
  user: (_obj, { root }) =>
    db.userRole.findOne({ where: { id: root.id } }).user(),
}

// Custom methods

export const createAdminUserRole = ({ input }) => {
  requireAuth({ role: ['admin', 'super_admin'] })
  return db.userRole.create({
    data: foreignKeyReplacement(input),
  })
}

export const createSuperUserRole = ({ input }) => {
  requireAuth({ role: 'super_admin' })
  return db.userRole.create({
    data: foreignKeyReplacement(input),
  })
}
