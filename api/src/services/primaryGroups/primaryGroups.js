import { db } from 'src/lib/db'
import { context } from '@redwoodjs/api'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const primaryGroups = () => {
  return db.primaryGroup.findMany()
}

export const primaryGroup = ({ id }) => {
  return db.primaryGroup.findOne({
    where: { id },
  })
}

export const createPrimaryGroup = ({ input }) => {
  return db.primaryGroup.create({
    data: foreignKeyReplacement(input),
  })
}

export const updatePrimaryGroup = ({ id, input }) => {
  return db.primaryGroup.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deletePrimaryGroup = ({ id }) => {
  return db.primaryGroup.delete({
    where: { id },
  })
}

export const PrimaryGroup = {
  owner: (_obj, { root }) =>
    db.primaryGroup.findOne({ where: { id: root.id } }).owner(),
  PrimaryEnrollment: (_obj, { root }) =>
    db.primaryGroup.findOne({ where: { id: root.id } }).PrimaryEnrollment(),
}

// Custom methods

// export const primaryGroupsOwned = () => {
//   console.log(context.currentUser.uid)
//   return db.primaryGroup.findMany({
//     where: { ownerId: context.currentUser.uid },
//   })
// }
