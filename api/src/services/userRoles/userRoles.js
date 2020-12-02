import { db } from 'src/lib/db'
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
  const roles = ['teacher', 'student', 'admin']
  if (roles.includes(input.name)) {
    return db.userRole.create({
      data: foreignKeyReplacement(input),
    })
  }
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

export const userRolesById = (id) => {
  return db.userRole.findMany({
    where: { userId: id },
  })
}
