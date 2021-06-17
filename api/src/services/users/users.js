import { db } from 'src/lib/db'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const updateUserPoints = async ({ id, points }) => {
  const userInDb = await db.user.findUnique({
    where: { id },
  })
  return db.user.update({
    data: { points: (userInDb.points += points) },
    where: { id },
  })
}

export const addUserPoints = async ({ id, points }) => {
  const userInDb = await db.user.findUnique({
    where: { id },
  })
  return db.user.update({
    data: { points: (userInDb.points += points) },
    where: { id },
  })
}

export const reduceUserPoints = async ({ id, points }) => {
  const userInDb = await db.user.findUnique({
    where: { id },
  })
  return db.user.update({
    data: { points: (userInDb.points -= points) },
    where: { id },
  })
}

export const updateUsersPoints = ({ input }) => {
  const updated = input.map(async (user) => {
    // find each selected userw
    const userInDb = await db.user.findUnique({ where: { id: user.id } })
    // Add feedback value to the existing users points
    user.points += userInDb.points
    return db.user.update({
      data: foreignKeyReplacement(user),
      where: { id: user.id },
    })
  })
  return updated
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
}

// export const totalUserPoints = async ({ id }) => {
//   const allFeedback = await db.feedback.aggregate({
//     where: { userId: id },
//     sum: { value: true },
//   })
//   if (allFeedback.sum.value === null) {
//     allFeedback.sum.value = 0
//   }
//   const allRedeemed = await db.redeemed.aggregate({
//     where: { userId: id },
//     sum: { cost: true },
//   })
//   if (allRedeemed.sum.value === null) {
//     allRedeemed.sum.value = 0
//   }
//   return allFeedback.sum.value - allRedeemed.sum.cost
// }
