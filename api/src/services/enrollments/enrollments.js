import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { UserInputError, context } from '@redwoodjs/api'
import { groupsOwned } from 'src/services/groups/groups'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({role: ['teacher']}), { only: ['enrollments', 'updateEnrollment', 'deleteEnrollment', 'enrollmentsOfGroup', 'enrollmentsOfInstructor']})
}

export const enrollments = () => {
  return db.enrollment.findMany()
}

export const enrollment = ({ id }) => {
  return db.enrollment.findUnique({
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
    db.enrollment.findUnique({ where: { id: root.id } }).user(),
  group: (_obj, { root }) =>
    db.enrollment.findUnique({ where: { id: root.id } }).group(),
}

// custom

export const createEnrollmentByEnrollId = async ({ input }) => {
  const group = await db.group.findFirst({
    where: { enrollId: input.enrollId },
  })
  if (!group) {
    throw new UserInputError(
      'Cannot find a class or group with entered Enroll ID.',
      {
        messages: {
          enrollId: ['Invalid Enroll ID'],
        },
      }
    )
  }
  const userEnrollments = await db.user
    .findUnique({
      where: { id: context.currentUser.id },
    })
    .enrollments()
  const enrollments = userEnrollments.map((e) => e.groupId)
  if (enrollments.includes(group.id)) {
    throw new UserInputError('Already Enrolled', {
      messages: {
        enrollId: ['Already enrolled with this Enroll ID'],
      },
    })
  }
  input.groupId = group.id
  delete input.enrollId // enrollId not a valid gql mutation input
  return db.enrollment.create({
    data: input,
  })
}

export const enrollmentsOfGroup = ({ groupId }) => {
  return db.enrollment.findMany({
    where: { groupId: groupId }
  })
}

export const enrollmentsOfUser = ({ userId }) => {
  return db.enrollment.findMany({
    where: { userId: userId },
  })
}

export const deleteEnrollmentByStudent = async ({ userId, groupId }) => {
  const group = await db.enrollment.findFirst({
    where: { userId: { equals: userId }, groupId: { equals: groupId } },
  })
  return db.enrollment.delete({
    where: { id: group.id },
  })
}

export const enrollmentsOfInstructor = async ({ userId }) => {
  const groups = await groupsOwned({ userId })
  const groupIds = groups.map((group) => group.id)
  return db.enrollment.findMany({
    where: { groupId: { in: groupIds } },
    distinct: ['userId'], // users can have multiple enrollments, so only return one distinct user
  })
}
