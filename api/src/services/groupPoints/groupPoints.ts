import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

import {
  updateUserPoints,
  updateUsersPoints,
  reduceUserPoints,
} from '../users/users'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({role: ['teacher', 'super_admin']}), { only: ['deleteGroupPoints']})
}

export const groupPoints = () => {
  return db.groupPoint.findMany()
}

export const deleteGroupPoints = () => {
  return db.groupPoint.deleteMany()
}

export const groupPointsOfUser = async ({ groupId, userId }) => {
  const groupPoints = await db.groupPoint.findFirst({ where: {
    groupId: groupId,
    userId: userId,
  }})
  if (groupPoints === null) { // Create group points if they don't exist already
    const newGroupPoint = await db.groupPoint.create({
      data: {
        points: 0,
        userId: userId,
        groupId: groupId,
      }
    })
    return newGroupPoint
  }
  return groupPoints
}

export const updateGroupPoints = async ({ input }) => {
  const groupPoints = await db.groupPoint.findFirst({ where: {
    groupId: input.groupId,
    userId: input.userId,
  }})
  if (groupPoints === null) { // Create group points if they don't exist already
    const newGroupPoint = await db.groupPoint.create({
      data: input
    })
    await updateUserPoints({ id: input.userId })
    return newGroupPoint
  }
  const updated = await db.groupPoint.update({
    data: {
      points: groupPoints.points + input.points
    },
    where: { id: groupPoints.id }
  })
  await updateUserPoints({ id: input.userId })
  return updated
}

export const updateGroupsPoints = async ({ input }) => {
  // Use Promise.all to wait for ALL updates to resolve
  const updatedUsers = await Promise.all(input.map((groupPointsInput) => {
    // find the groupPoint for the user/group
    return updateGroupPoints({ input: groupPointsInput})
  }))
  return updatedUsers
}

export const addGroupPoints = async ({ input }) => {
  const groupPoints = await db.groupPoint.findFirst({ where: {
    groupId: input.groupId,
    userId: input.userId,
  }})
  const updatedGroupPoints = await db.groupPoint.update({
    data: {
      points: groupPoints.points + input.points
    },
    where: { id: groupPoints.id }
  })
  await updateUserPoints({ id: input.userId })
  return updatedGroupPoints
}

export const reduceGroupPoints = async ({ input }) => {
  const groupPoints = await db.groupPoint.findFirst({ where: {
    groupId: input.groupId,
    userId: input.userId,
  }})
  if (groupPoints.points >= input.points) { // Create group points if they don't exist already
    const updatedGroupPoints = await db.groupPoint.update({
      data: {
        points: groupPoints.points - input.points
      },
      where: { id: groupPoints.id }
    })
    await updateUserPoints({ id: input.userId })
    return updatedGroupPoints
  } else {
    throw new UserInputError('User cannot be given less than 0 kudos in a group.')
  }
}

export const GroupPoint = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof groupPoint>>) =>
    db.groupPoint.findUnique({ where: { id: root.id } }).user(),
  group: (_obj, { root }: ResolverArgs<ReturnType<typeof groupPoint>>) =>
    db.groupPoint.findUnique({ where: { id: root.id } }).group(),
}
