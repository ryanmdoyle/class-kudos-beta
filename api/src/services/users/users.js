import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

import { enrollmentsOfGroup } from 'src/services/enrollments/enrollments'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({ role: ['teacher', 'super_admin'] }), {
    only: ['users', 'deleteUser'],
  })
}

// QUERIES //////////////////////////////////////////////////////////

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const usersOfGroup = async ({ groupId }) => {
  const enrollments = await enrollmentsOfGroup({ groupId })
  const userIds = enrollments.map((enrollment) => enrollment.userId)
  return db.user.findMany({
    where: { id: { in: userIds } },
    orderBy: { firstName: 'asc' },
  })
}

// MUTATIONS //////////////////////////////////////////////////////////

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const updateUserPoints = async ({ input }) => {
  const { userId, points } = input
  if (points > 0) {
    return await addUserPoints({ id: userId, points: points })
  } else {
    return await reduceUserPoints({ id: userId, points: points })
  }
}

export const updateUsersPoints = ({ input }) => {
  const updated = input.map(async (user) => {
    return await updateUserPoints({ id: user.id })
  })
  return updated
}

export const updateUserPointsFromGroupPoints = async ({ id }) => {
  // update a users points based on the sum all of all group points
  const groupPointsTotal = await db.groupPoint.aggregate({
    where: { userId: id, group: { archived: false } },
    _sum: { points: true },
  })
  return await db.user.update({
    data: { points: groupPointsTotal._sum.points || 0 },
    where: { id },
  })
}

export const addUserPoints = async ({ id, points }) => {
  return db.user.update({
    data: {
      points: {
        increment: points,
      },
    },
    where: { id },
  })
}

export const reduceUserPoints = async ({ id, points }) => {
  const user = await db.user.findUnique({
    where: { id },
  })
  if (user.points + points >= 0) {
    // reduce points if result is 0 or positive total
    return db.user.update({
      data: {
        points: {
          increment: points, // points are neg, must increment. (adding negative to reduce)
        },
      },
      where: { id },
    })
  } else {
    // if result would be negative, set to 0
    return db.user.update({
      data: {
        points: {
          set: 0,
        },
      },
      where: { id },
    })
  }
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
  groupPoints: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).groupPoints(),
}
