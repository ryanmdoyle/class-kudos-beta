import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { context, UserInputError } from '@redwoodjs/api'
import { nanoid } from 'nanoid'
import foreignKeyReplacement from '../foreignKeyReplacement'
import createStarterBehaviors from 'src/lib/createStarterBehaviors'

export const groups = () => {
  return db.group.findMany()
}

export const group = ({ id }) => {
  return db.group.findUnique({
    where: { id },
  })
}

export const createGroup = ({ input }) => {
  requireAuth({ role: 'teacher' })
  if (input.type === 'primary' || input.type === 'secondary') {
    // input.enrollId = nanoid(8)
    const inputWithKeys = foreignKeyReplacement(input)
    const group = db.group.create({
      data: { enrollId: nanoid(8), ...inputWithKeys },
    })
    group.then((data) => createStarterBehaviors(data.id))
    return group
  } else {
    throw new UserInputError('Cannot create group, invalid group type.')
  }
}

export const updateGroup = ({ id, input }) => {
  return db.group.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteGroup = async ({ id }) => {
  await db.behavior.deleteMany({
    where: { groupId: id },
  })
  return db.group.delete({
    where: { id },
  })
}

export const Group = {
  owner: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).owner(),
  enrollments: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).enrollments(),
  behaviors: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).behaviors(),
  rewards: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).rewards(),
  feedback: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).feedback(),
}

// Custom

export const groupsOwned = ({ userId }) => {
  return db.group.findMany({
    where: { ownerId: userId },
  })
}
