import { db } from 'src/lib/db'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const primaryEnrollments = () => {
  return db.primaryEnrollment.findMany()
}

export const primaryEnrollment = ({ id }) => {
  return db.primaryEnrollment.findOne({
    where: { id },
  })
}

export const createPrimaryEnrollment = ({ input }) => {
  return db.primaryEnrollment.create({
    data: foreignKeyReplacement(input),
  })
}

export const updatePrimaryEnrollment = ({ id, input }) => {
  return db.primaryEnrollment.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deletePrimaryEnrollment = ({ id }) => {
  return db.primaryEnrollment.delete({
    where: { id },
  })
}

export const PrimaryEnrollment = {
  user: (_obj, { root }) =>
    db.primaryEnrollment.findOne({ where: { id: root.id } }).user(),
  primaryGroup: (_obj, { root }) =>
    db.primaryEnrollment.findOne({ where: { id: root.id } }).primaryGroup(),
}

// custom
export const primaryEnrollmentsOfGroup = (id) => {
  return db.primaryEnrollment.findMany({
    where: { primaryGroupId: id },
  })
}
