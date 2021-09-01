import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { reduceGroupPoints, addGroupPoints } from '../groupPoints/groupPoints'
import { addUserPoints, reduceUserPoints } from '../users/users'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({ role: ['teacher', 'super_admin'] }), {
    only: [
      'updateRedeemed',
      'deleteRedeemed',
      'redeemedOfGroup',
      'redeemedOfGroupToReview',
      'redeemedOfGroupReviewed',
      'approveRedeemed',
      'approveRedeemeds',
    ],
  })
}

export const redeemeds = () => {
  return db.redeemed.findMany()
}

export const redeemed = ({ id }) => {
  return db.redeemed.findUnique({
    where: { id },
  })
}

export const createRedeemed = async ({ input }) => {
  const userGroupPoints = await db.groupPoint.findFirst({
    where: { groupId: input.groupId, userId: input.userId },
  })
  if (userGroupPoints.points >= input.cost) {
    await reduceGroupPoints({
      input: {
        groupId: input.groupId,
        userId: input.userId,
        points: -input.cost, // points accepts neg value to reduce
      },
    })
    await reduceUserPoints({
      id: input.userId,
      points: -input.cost, // points accepts neg value to reduce
    })
    return db.redeemed.create({
      data: input,
    })
  } else {
    throw new UserInputError('Cannot redeem more kudos than a user has.')
  }
}

export const updateRedeemed = ({ id, input }) => {
  return db.redeemed.update({
    data: input,
    where: { id },
  })
}

export const deleteRedeemed = async ({ id }) => {
  const redeemedPending = await db.redeemed.findUnique({ where: { id } })
  await addGroupPoints({
    input: {
      userId: redeemedPending.userId,
      groupId: redeemedPending.groupId,
      points: redeemedPending.cost,
    },
  })
  await addUserPoints({
    id: redeemedPending.userId,
    points: redeemedPending.cost,
  })
  return db.redeemed.delete({
    where: { id },
  })
}

export const Redeemed = {
  user: (_obj, { root }) =>
    db.redeemed.findUnique({ where: { id: root.id } }).user(),
  group: (_obj, { root }) =>
    db.redeemed.findUnique({ where: { id: root.id } }).group(),
}

// Custom
export const redeemedOfUser = ({ userId }) => {
  return db.redeemed.findMany({ where: { userId: userId } })
}

export const redeemedOfUserForGroup = ({ userId, groupId }) => {
  return db.redeemed.findMany({
    where: { userId: userId, groupId: groupId },
    orderBy: { createdAt: 'desc' },
  })
}

export const redeemedOfGroup = ({ groupId }) => {
  return db.redeemed.findMany({
    where: { groupId: groupId },
    orderBy: { createdAt: 'desc' },
  })
}

export const redeemedOfGroupToReview = ({ groupId }) => {
  return db.redeemed.findMany({
    where: { groupId: groupId, reviewed: false },
    orderBy: { createdAt: 'desc' },
  })
}

export const redeemedOfGroupReviewed = ({ groupId }) => {
  return db.redeemed.findMany({
    where: { groupId: groupId, reviewed: true },
    orderBy: { createdAt: 'desc' },
  })
}

export const approveRedeemed = ({ id }) => {
  const now = new Date()
  const input = {
    id,
    reviewed: true,
    reviewedAt: now,
  }
  return db.redeemed.update({
    data: input,
    where: { id },
  })
}

export const approveRedeemeds = async ({ ids }) => {
  // create array of ids for the "in" filter below
  const idList = ids.map((id) => id.id)
  const now = new Date()

  const approvals = await db.redeemed.updateMany({
    where: { id: { in: idList } },
    data: {
      reviewed: true,
      reviewedAt: now,
    },
  })
  if (approvals.count === ids.length) {
    return ids
  }
  return new UserInputError('Invalid Users')
}
