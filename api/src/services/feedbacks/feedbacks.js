import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const feedbacks = () => {
  return db.feedback.findMany()
}

export const feedback = ({ id }) => {
  return db.feedback.findUnique({
    where: { id },
  })
}

export const createFeedback = async ({ input }) => {
  const allFeedback = await db.feedback.aggregate({
    where: { userId: input.userId },
    sum: { value: true },
  })
  const allRedeemed = await db.redeemed.aggregate({
    where: { userId: input.userId },
    sum: { cost: true },
  })
  const totalPoints = allFeedback.sum.value - allRedeemed.sum.cost
  if (totalPoints + input.value >= 0) {
    return db.feedback.create({
      data: foreignKeyReplacement(input),
    })
  } else {
    throw new UserInputError('User cannot be given less than 0 points.')
  }
}

export const updateFeedback = ({ id, input }) => {
  return db.feedback.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteFeedback = ({ id }) => {
  return db.feedback.delete({
    where: { id },
  })
}

export const Feedback = {
  user: (_obj, { root }) =>
    db.feedback.findUnique({ where: { id: root.id } }).user(),
  behavior: (_obj, { root }) =>
    db.feedback.findUnique({ where: { id: root.id } }).behavior(),
  group: (_obj, { root }) =>
    db.feedback.findUnique({ where: { id: root.id } }).group(),
}

// Custom
export const feedbackOfUser = ({ userId }) => {
  return db.feedback.findMany({
    where: { userId: userId },
    orderBy: { createdAt: 'desc' },
  })
}

export const feedbackOfUserForGroup = ({ userId, groupId }) => {
  return db.feedback.findMany({
    where: { userId: userId, groupId: groupId },
    orderBy: { createdAt: 'desc' },
  })
}

export const feedbackOfGroup = ({ groupId }) => {
  return db.feedback.findMany({
    where: { groupId: groupId },
    orderBy: { createdAt: 'desc' },
  })
}
