import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({role: ['teacher', 'super_admin']}), { only: ['createReward', 'updateReward', 'deleteReward']})
}

export const rewards = () => {
  return db.reward.findMany()
}

export const reward = ({ id }) => {
  return db.reward.findUnique({
    where: { id },
  })
}

export const createReward = ({ input }) => {
  if (input.responsePrompt === '') {
    // if client passes no response, set responseReq back to false
    input.responseRequired = false
  }
  return db.reward.create({
    data: input,
  })
}

export const updateReward = ({ id, input }) => {
  return db.reward.update({
    data: input,
    where: { id },
  })
}

export const deleteReward = ({ id }) => {
  return db.reward.delete({
    where: { id },
  })
}

export const Reward = {
  group: (_obj, { root }) =>
    db.reward.findUnique({ where: { id: root.id } }).group(),
  redeemed: (_obj, { root }) =>
    db.reward.findUnique({ where: { id: root.id } }).redeemed(),
}

// Custom

export const rewardsOfGroup = ({ groupId }) => {
  return db.reward.findMany({
    where: { groupId: groupId },
    orderBy: { cost: 'asc' },
  })
}
