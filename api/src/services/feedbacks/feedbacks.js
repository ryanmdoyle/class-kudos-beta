import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import {
  updateUserPoints,
  updateUsersPoints,
  reduceUserPoints,
} from '../users/users'
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
  const userInDb = await db.user.findUnique({ where: { id: input.userId } })
  if (userInDb.points + input.value >= 0) {
    await updateUserPoints({ id: input.userId, points: input.value })
    return db.feedback.create({
      data: input,
    })
  } else {
    throw new UserInputError('User cannot be given less than 0 kudos.')
  }
}

export const updateFeedback = ({ id, input }) => {
  return db.feedback.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteFeedback = async ({ id }) => {
  const feedbackInDb = await db.feedback.findUnique({ where: { id } })
  await reduceUserPoints({
    id: feedbackInDb.userId,
    points: feedbackInDb.value,
  })
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

export const createFeedbacks = async ({ input }) => {
  const usersForPointUpdate = input.map((feedback) => {
    return {
      id: feedback.userId,
      points: feedback.value,
    }
  })
  await updateUsersPoints({ input: usersForPointUpdate })
  const created = await db.feedback.createMany({
    data: input,
  })
  if (created.count === input.length) {
    created.id = created.count
    return created
  }
  return UserInputError('Invalid Users')
}
