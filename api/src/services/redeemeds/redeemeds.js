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
  const userFeedback = await db.feedback.findMany({
    where: { userId: input.userId },
  })
  const userRedeemed = await db.redeemed.findMany({
    where: { userId: input.userId },
  })
  const feedbacks =
    userFeedback?.reduce((accumulator, currentFeedback) => {
      return accumulator + currentFeedback.value
    }, 0) || 0
  const redeemeds =
    userRedeemed?.reduce((accumulator, currentRedeemed) => {
      return accumulator + currentRedeemed.cost
    }, 0) || 0
  if (feedbacks - redeemeds >= input.cost) {
    return db.redeemed.create({
      data: foreignKeyReplacement(input),
    })
  } else {
    throw new UserInputError(
      'Cannot redeem more points than a user has earned.'
    )
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

export const redeemedOfUser = ({ userId }) => {
  return db.redeemed.findMany({ where: { userId: userId } })
}
