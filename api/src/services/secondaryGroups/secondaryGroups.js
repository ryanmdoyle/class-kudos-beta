import { db } from 'src/lib/db'
import { context } from '@redwoodjs/api'
import foreignKeyReplacement from '../foreignKeyReplacement'

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
    data: foreignKeyReplacement(input),
  })
}

export const updateSecondaryGroup = ({ id, input }) => {
  return db.secondaryGroup.update({
    data: foreignKeyReplacement(input),
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

// Custom Methods
export const secondaryGroupsOwned = () => {
  return db.secondaryGroup.findMany({
    where: { ownerId: context.currentUser.id },
  })
}
