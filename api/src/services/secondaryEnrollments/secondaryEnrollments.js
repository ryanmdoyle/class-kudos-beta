import { db } from 'src/lib/db'

export const secondaryEnrollments = () => {
  return db.secondaryEnrollment.findMany()
}

export const secondaryEnrollment = ({ id }) => {
  return db.secondaryEnrollment.findOne({
    where: { id },
  })
}

export const createSecondaryEnrollment = ({ input }) => {
  return db.secondaryEnrollment.create({
    data: input,
  })
}

export const updateSecondaryEnrollment = ({ id, input }) => {
  return db.secondaryEnrollment.update({
    data: input,
    where: { id },
  })
}

export const deleteSecondaryEnrollment = ({ id }) => {
  return db.secondaryEnrollment.delete({
    where: { id },
  })
}

export const SecondaryEnrollment = {
  user: (_obj, { root }) =>
    db.secondaryEnrollment.findOne({ where: { id: root.id } }).user(),
  secondaryGroup: (_obj, { root }) =>
    db.secondaryEnrollment.findOne({ where: { id: root.id } }).secondaryGroup(),
}
