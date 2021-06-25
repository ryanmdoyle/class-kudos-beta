import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({role: ['teacher']}), { only: ['createBehavior', 'updateBehavior', 'deleteBehavior']})
}

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
    data: input,
  })
}

export const updateBehavior = ({ id, input }) => {
  return db.behavior.update({
    data: input,
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
    orderBy: { value: 'asc' },
  })
}
