import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const redeemeds = () => {
  return db.redeemed.findMany()
}

export const redeemed = ({ id }) => {
  return db.redeemed.findUnique({
    where: { id },
  })
}

export const createRedeemed = async ({ input }) => {
  const allFeedback = await db.feedback.aggregate({
    where: { userId: input.userId },
    sum: { value: true },
  })
  if (allFeedback.sum.value === null) {
    allFeedback.sum.value = 0
  }
  const allRedeemed = await db.redeemed.aggregate({
    where: { userId: input.userId },
    sum: { cost: true },
  })
  if (allRedeemed.sum.value === null) {
    allRedeemed.sum.value = 0
  }
  const totalPoints = allFeedback.sum.value - allRedeemed.sum.cost
  if (totalPoints >= input.cost) {
    return db.redeemed.create({
      data: foreignKeyReplacement(input),
    })
  } else {
    throw new UserInputError('Cannot redeem more kudos than a user has.')
  }
}

export const updateRedeemed = ({ id, input }) => {
  return db.redeemed.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteRedeemed = ({ id }) => {
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
    data: foreignKeyReplacement(input),
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
