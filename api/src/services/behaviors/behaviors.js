import { db } from 'src/lib/db'

export const behaviors = () => {
  return db.behavior.findMany()
}

export const behavior = ({ id }) => {
  return db.behavior.findOne({
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
