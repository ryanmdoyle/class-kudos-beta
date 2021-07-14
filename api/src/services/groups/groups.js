import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { UserInputError } from '@redwoodjs/api'
import { nanoid } from 'nanoid'

import createStarterBehaviors from 'src/lib/createStarterBehaviors'

import { enrollmentsOfGroup } from 'src/services/enrollments/enrollments'
import { updateUserPoints } from 'src/services/users/users'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({role: ['teacher', 'super_admin']}), { only: ['createGroup', 'updateGroup', 'deleteGroup', 'groupsOwned', 'archiveGroup']})
}

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
    const group = db.group.create({
      data: { enrollId: nanoid(8), ...input },
    })
    group.then((data) => createStarterBehaviors(data.id))
    return group
  } else {
    throw new UserInputError('Cannot create group, invalid group type.')
  }
}

export const updateGroup = ({ id, input }) => {
  return db.group.update({
    data: input,
    where: { id },
  })
}

// archive should be used over delete to maintain references and future data queries
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
  groupPoints: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).groupPoints(),
}

// Custom

export const groupsOwned = ({ userId }) => {
  return db.group.findMany({
    where: { ownerId: userId, archived: false },
    orderBy: { name: 'desc' },
  })
}

export const groupsEnrolled = async ({ userId }) => {
  const enrolledGroups = await db.enrollment.findMany({
    where: { userId: userId },
  })
  const groupIds = enrolledGroups.map((group) => group.groupId)
  return db.group.findMany({
    where: { id: { in: groupIds }, archived: false },
    orderBy: { name: 'desc' },
  })
}

export const archiveGroup = async ({ id }) => {
  const archived = await db.group.update({
    data: {
      archived: true,
    },
    where: { id },
  })
  try {
    const enrolled = await enrollmentsOfGroup({ groupId: id})
    await Promise.all(
      enrolled.map(enrollment => updateUserPoints({ id: enrollment.userId}))
    )
  }
  catch(err) {
    await db.group.update({
      data: {
        archived: false,
      },
      where: { id },
    })
    throw new UserInputError('There was a problem updating user points. Please try again later.')
  }
  return archived
}
