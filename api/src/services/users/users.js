import { db } from 'src/lib/db'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  roles: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).roles(),
  feedback: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).feedback(),
  redeemed: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).redeemed(),
  groups: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).groups(),
  enrollments: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).enrollments(),
}
