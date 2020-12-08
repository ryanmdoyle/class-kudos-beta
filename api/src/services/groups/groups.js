import { db } from 'src/lib/db'
import { context, UserInputError } from '@redwoodjs/api'
import foreignKeyReplacement from '../foreignKeyReplacement'
import { requireAuth } from 'src/lib/auth'

export const groups = () => {
  return db.group.findMany()
}

export const group = ({ id }) => {
  return db.group.findOne({
    where: { id },
  })
}

export const createGroup = ({ input }) => {
  requireAuth({ role: 'teacher' })
  // if role == teacher
  if (input.type !== 'primary' || input.type !== 'secondary') {
    throw new UserInputError('Cannot create group, invalid group type.')
  }
  return db.group.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateGroup = ({ id, input }) => {
  return db.group.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteGroup = ({ id }) => {
  return db.group.delete({
    where: { id },
  })
}

export const Group = {
  owner: (_obj, { root }) =>
    db.group.findOne({ where: { id: root.id } }).owner(),
  enrollments: (_obj, { root }) =>
    db.group.findOne({ where: { id: root.id } }).enrollments(),
}

// Custom methods

export const groupsOwned = () => {
  return db.group.findMany({
    where: { ownerId: context.currentUser.id },
  })
}