import { db } from 'src/lib/db'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const redeemeds = () => {
  return db.redeemed.findMany()
}

export const redeemed = ({ id }) => {
  return db.redeemed.findOne({
    where: { id },
  })
}

export const createRedeemed = ({ input }) => {
  return db.redeemed.create({
    data: foreignKeyReplacement(input),
  })
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
    db.redeemed.findOne({ where: { id: root.id } }).user(),
  reward: (_obj, { root }) =>
    db.redeemed.findOne({ where: { id: root.id } }).reward(),
}
