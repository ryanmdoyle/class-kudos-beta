import { db } from 'src/lib/db'

export const secondaryGroups = () => {
  return db.secondaryGroup.findMany()
}

export const secondaryGroup = ({ id }) => {
  return db.secondaryGroup.findOne({
    where: { id },
  })
}

export const createSecondaryGroup = ({ input }) => {
  return db.secondaryGroup.create({
    data: input,
  })
}

export const updateSecondaryGroup = ({ id, input }) => {
  return db.secondaryGroup.update({
    data: input,
    where: { id },
  })
}

export const deleteSecondaryGroup = ({ id }) => {
  return db.secondaryGroup.delete({
    where: { id },
  })
}

export const SecondaryGroup = {
  owner: (_obj, { root }) =>
    db.secondaryGroup.findOne({ where: { id: root.id } }).owner(),
  SecondaryEnrollment: (_obj, { root }) =>
    db.secondaryGroup.findOne({ where: { id: root.id } }).SecondaryEnrollment(),
}
