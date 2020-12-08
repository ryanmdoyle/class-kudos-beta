import { db } from 'src/lib/db'

export const enrollments = () => {
  return db.enrollment.findMany()
}

export const enrollment = ({ id }) => {
  return db.enrollment.findOne({
    where: { id },
  })
}

export const createEnrollment = ({ input }) => {
  return db.enrollment.create({
    data: input,
  })
}

export const updateEnrollment = ({ id, input }) => {
  return db.enrollment.update({
    data: input,
    where: { id },
  })
}

export const deleteEnrollment = ({ id }) => {
  return db.enrollment.delete({
    where: { id },
  })
}

export const Enrollment = {
  user: (_obj, { root }) =>
    db.enrollment.findOne({ where: { id: root.id } }).user(),
  group: (_obj, { root }) =>
    db.enrollment.findOne({ where: { id: root.id } }).group(),
}

// custom

export const enrollmentsOfGroup = (id) => {
  return db.enrollment.findMany({
    where: { groupId: id },
  })
}
