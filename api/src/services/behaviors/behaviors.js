import { db } from 'src/lib/db'
import foreignKeyReplacement from '../foreignKeyReplacement'

export const behaviors = () => {
  return db.behavior.findMany()
}

export const behavior = ({ id }) => {
  return db.behavior.findUnique({
    where: { id },
  })
}

export const createBehavior = ({ input }) => {
  return db.behavior.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateBehavior = ({ id, input }) => {
  return db.behavior.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteBehavior = ({ id }) => {
  return db.behavior.delete({
    where: { id },
  })
}

export const Behavior = {
  group: (_obj, { root }) =>
    db.behavior.findUnique({ where: { id: root.id } }).group(),
  feedback: (_obj, { root }) =>
    db.behavior.findUnique({ where: { id: root.id } }).feedback(),
}

// Custom

export const behaviorsOfGroup = ({ groupId }) => {
  return db.behavior.findMany({
    where: { groupId: groupId },
    orderBy: { name: 'desc' },
  })
}

export const deleteBehaviorsOfGroup = ({ groupId }) => {
  return db.behavior.delete({
    where: { id: groupId },
  })
}
