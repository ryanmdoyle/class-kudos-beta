import { db } from 'src/lib/db'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const feedbacks = () => {
  return db.feedback.findMany()
}

export const feedback = ({ id }) => {
  return db.feedback.findOne({
    where: { id },
  })
}

export const createEnrollment = ({ input }) => {
  return db.enrollment.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateEnrollment = ({ id, input }) => {
  return db.enrollment.update({
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
    db.feedback.findOne({ where: { id: root.id } }).user(),
  behavior: (_obj, { root }) =>
    db.feedback.findOne({ where: { id: root.id } }).behavior(),
}

// Custom

export const feedbacksOfUser = ({ userId }) => {
  return db.feedback.findMany({
    where: { userId },
  })
}
