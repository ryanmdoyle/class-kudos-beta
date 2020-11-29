import { db } from 'src/lib/db'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
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
    db.user.findOne({ where: { id: root.id } }).roles(),
  Feedback: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).Feedback(),
  Redeemed: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).Redeemed(),
  ClassEnrollment: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).ClassEnrollment(),
  GroupEnrollment: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).GroupEnrollment(),
  PrimaryGroup: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).PrimaryGroup(),
  SecondaryGroup: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).SecondaryGroup(),
}
