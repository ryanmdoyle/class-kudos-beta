import { db } from 'src/lib/db'

export const feedbacks = () => {
  return db.feedback.findMany()
}

export const feedback = ({ id }) => {
  return db.feedback.findOne({
    where: { id },
  })
}

export const createFeedback = ({ input }) => {
  return db.feedback.create({
    data: input,
  })
}

export const updateFeedback = ({ id, input }) => {
  return db.feedback.update({
    data: input,
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
    db.feedback.findOne({ where: { id: root.id } }).user(),
  behavior: (_obj, { root }) =>
    db.feedback.findOne({ where: { id: root.id } }).behavior(),
}
