import { db } from 'src/lib/db'
import { context, UserInputError } from '@redwoodjs/api'
import foreignKeyReplacement from '../foreignKeyReplacement'
import { requireAuth } from 'src/lib/auth'
import createStarterBehaviors from 'src/lib/createStarterBehaviors'

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
  if (input.type === 'primary' || input.type === 'secondary') {
    const group = db.group.create({
      data: foreignKeyReplacement(input),
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
    db.group.findOne({ where: { id: root.id } }).owner(),
  enrollments: (_obj, { root }) =>
    db.group.findOne({ where: { id: root.id } }).enrollments(),
  behaviors: (_obj, { root }) =>
    db.group.findOne({ where: { id: root.id } }).behaviors(),
  rewards: (_obj, { root }) =>
    db.group.findOne({ where: { id: root.id } }).rewards(),
}

// Custom methods

export const groupsOwned = () => {
  return db.group.findMany({
    where: { ownerId: context.currentUser.id },
  })
}
