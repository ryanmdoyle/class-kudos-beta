import { db } from 'src/lib/db'
import { UserInputError } from '@redwoodjs/api'
import foreignKeyReplacement from '../foreignKeyReplacement'

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
    data: foreignKeyReplacement(input),
  })
}

export const updateEnrollment = ({ id, input }) => {
  return db.enrollment.update({
    data: foreignKeyReplacement(input),
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

const validateEnrollId = (input) => {
  if (!input) {
    throw new UserInputError(
      'Cannot find a class or group with entered Enroll ID.',
      {
        messages: {
          enrollId: ['Invalid Enroll ID'],
        },
      }
    )
  }
}

export const createEnrollmentByEnrollId = async ({ input }) => {
  const group = await db.group.findFirst({
    where: { enrollId: input.enrollId },
  })
  validateEnrollId(group)
  input.groupId = group.id
  delete input.enrollId // enrollId not a valid gql mutation input
  return db.enrollment.create({
    data: foreignKeyReplacement(input),
  })
}
