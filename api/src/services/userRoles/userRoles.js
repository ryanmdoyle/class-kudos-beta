import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { UserInputError } from '@redwoodjs/api'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({role: ['teacher', 'super_admin']}), { only: ['updateUserRole', 'deleteUserRole']})
  rules.add(() => requireAuth({role: ['admin', 'super_admin']}), { only: ['createAdminUserRole']})
  rules.add(() => requireAuth({role: ['super_admin']}), { only: ['createSuperUserRole']})
}

export const userRoles = () => {
  return db.userRole.findMany()
}

export const userRole = ({ id }) => {
  return db.userRole.findUnique({
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
    data: input,
  })
}

export const updateUserRole = ({ id, input }) => {
  return db.userRole.update({
    data: input,
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
    db.userRole.findUnique({ where: { id: root.id } }).user(),
}

// Custom methods

export const createAdminUserRole = ({ input }) => {
  requireAuth({ role: ['admin', 'super_admin'] })
  return db.userRole.create({
    data: input,
  })
}

export const createSuperUserRole = ({ input }) => {
  requireAuth({ role: 'super_admin' })
  return db.userRole.create({
    data: input,
  })
}
