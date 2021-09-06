import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { updateUserPoints, updateUsersPoints } from '../users/users'
import {
  updateGroupPoint,
  updateGroupPoints,
  reduceGroupPoints,
} from '../groupPoints/groupPoints'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({ role: ['teacher', 'super_admin'] }), {
    only: [
      'createFeedback',
      'updateFeedback',
      'deleteFeedback',
      'createFeedbacks',
      'archiveGroup',
    ],
  })
  rules.add(() => requireAuth({ role: ['super_admin'] }), {
    only: ['deleteFeedbacks'],
  })
}

// QUERIES /////////////////////////////////////////////////////////////

export const feedbacks = () => {
  return db.feedback.findMany()
}

export const feedback = ({ id }) => {
  return db.feedback.findUnique({
    where: { id },
  })
}

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

// MUTATIONS //////////////////////////////////////////////////////////

export const createFeedback = async ({ input }) => {
  await Promise.allSettled([
    updateUserPoints({
      input: {
        userId: input.userId,
        points: input.value,
      },
    }),
    updateGroupPoint({
      input: {
        userId: input.userId,
        groupId: input.groupId,
        points: input.value,
      },
    }),
  ]).catch(() => {
    throw new UserInputError('error')
  })
  // create the actual feedback
  return db.feedback.create({
    data: input,
  })
}

export const createFeedbacks = async ({ input }) => {
  await updateUsersPoints({
    input: {
      ids: input.userIds,
      points: input.value,
    },
  })
  await updateGroupPoints({
    input: {
      userIds: input.userIds,
      groupId: input.groupId,
      points: input.value,
    },
  })
  const feedbackData = input.userIds.map((userId) => {
    const feedback = {
      userId: userId,
      groupId: input.groupId,
      name: input.name,
      value: input.value,
    }
    if (input.behaviorId) {
      feedback.behaviorId = input.behaviorId
    }
    return feedback
  })
  return await db.feedback.createMany({
    data: feedbackData,
  })
}

export const updateFeedback = ({ id, input }) => {
  return db.feedback.update({
    data: input,
    where: { id },
  })
}

export const deleteFeedback = async ({ id }) => {
  const feedbackInDb = await db.feedback.findUnique({ where: { id } })
  await reduceGroupPoints({
    input: {
      userId: feedbackInDb.userId,
      groupId: feedbackInDb.groupId,
      points: -feedbackInDb.value, // reduceGroupPoints uses "decrement", pass reduce value as pos int
    },
  })
  await updateUserPoints({
    input: {
      userId: feedbackInDb.userId,
      points: -feedbackInDb.value,
    },
  })
  return db.feedback.delete({
    where: { id },
  })
}

export const deleteFeedbacks = () => {
  return db.feedback.deleteMany()
}

export const Feedback = {
  user: (_obj, { root }) =>
    db.feedback.findUnique({ where: { id: root.id } }).user(),
  behavior: (_obj, { root }) =>
    db.feedback.findUnique({ where: { id: root.id } }).behavior(),
  group: (_obj, { root }) =>
    db.feedback.findUnique({ where: { id: root.id } }).group(),
}
