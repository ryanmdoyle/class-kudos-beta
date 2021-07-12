import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { updateGroupPoints, reduceGroupPoints, updateGroupsPoints } from '../groupPoints/groupPoints'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({role: ['teacher', 'super_admin']}), { only: ['createFeedback', 'updateFeedback', 'deleteFeedback', 'createFeedbacks', 'archiveGroup']})
  rules.add(() => requireAuth({role: ['super_admin']}), { only: ['deleteFeedbacks']})
}

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
    // assign points for group feedback is given
    await updateGroupPoints({ input: {
      userId: input.userId,
      groupId: input.groupId,
      points: input.value,
    }})
    // create the actual feedback
    return db.feedback.create({
      data: input,
    })
  } else {
    throw new UserInputError('User cannot be given less than 0 kudos.')
  }
}

export const updateFeedback = ({ id, input }) => {
  return db.feedback.update({
    data: input,
    where: { id },
  })
}

export const deleteFeedback = async ({ id }) => {
  const feedbackInDb = await db.feedback.findUnique({ where: { id } })
  reduceGroupPoints({
    input: {
      userId: feedbackInDb.userId,
      groupId: feedbackInDb.groupId,
      points: feedbackInDb.value,
    }
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
  // UPDATE GROUP POINTS HERE --> THIS WORKS
  const groupsPointsInput = input.map(feedback => {
    return {
      userId: feedback.userId,
      groupId: feedback.groupId,
      points: feedback.value,
    }
  })
  await updateGroupsPoints({ input: groupsPointsInput })

  // create all the feedbacks
  const created = await db.feedback.createMany({
    data: input,
  })
  if (created.count === input.length) {
    created.id = created.count
    return created
  }
  return UserInputError('Invalid Users')
}
