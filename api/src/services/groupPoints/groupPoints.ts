import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
  rules.add(() => requireAuth({ role: ['teacher', 'super_admin'] }), {
    only: ['deleteGroupPoints'],
  })
}

// QUERIES /////////////////////////////////////////////////////////////

export const groupPoints = () => {
  return db.groupPoint.findMany()
}

export const groupPointsOfUser = async ({ groupId, userId }) => {
  const groupPoints = await db.groupPoint.findFirst({
    where: {
      groupId: groupId,
      userId: userId,
    },
  })
  if (groupPoints === null) {
    // Create group points if they don't exist already
    const newGroupPoint = await db.groupPoint.create({
      data: {
        points: 0,
        userId: userId,
        groupId: groupId,
      },
    })
    return newGroupPoint
  }
  return groupPoints
}

export const groupPointsOfGroup = async ({ groupId }) => {
  const enrolled = await db.enrollment.findMany({
    where: {
      groupId: groupId,
    },
  })
  const enrolledUserIds = enrolled.map((user) => user.userId)
  const groupPointsFound = await db.feedback.aggregate({
    where: {
      groupId: groupId,
      userId: { in: enrolledUserIds },
    },
    _sum: {
      value: true,
    },
  })
  return groupPointsFound._sum.value
}

// MUTATAIONS //////////////////////////////////////////////////////////

export const createGroupPoints = async ({ userId, groupId }) => {
  return await db.groupPoint.create({
    data: {
      points: 0,
      userId: userId,
      groupId: groupId,
    },
  })
}

export const updateGroupPoint = async ({ input }) => {
  if (input.points > 0) {
    addGroupPoints({ input })
  } else {
    reduceGroupPoints({ input })
  }
}

export const updateGroupPoints = async ({ input }) => {
  if (input.points > 0) {
    return await addManyGroupPoints({ input })
  } else {
    return await reduceManyGroupPoints({ input })
  }
}

export const addGroupPoints = async ({ input }) => {
  return await db.groupPoint.updateMany({
    data: {
      points: {
        increment: input.points,
      },
    },
    where: {
      userId: input.userId,
      groupId: input.groupId,
    },
  })
}

export const reduceGroupPoints = async ({ input }) => {
  const groupPoints = await db.groupPoint.findFirst({
    where: {
      userId: input.userId,
      groupId: input.groupId,
    },
  })
  if (groupPoints.points + input.points >= 0) {
    return await db.groupPoint.update({
      data: {
        points: {
          increment: input.points, // points passed should be negative value
        },
      },
      where: {
        id: groupPoints.id,
      },
    })
  } else {
    return await db.groupPoint.update({
      data: {
        points: {
          set: 0,
        },
      },
      where: {
        id: groupPoints.id,
      },
    })
  }
}

export const addManyGroupPoints = async ({ input }) => {
  const updated = await db.groupPoint.updateMany({
    data: {
      points: {
        increment: input.points,
      },
    },
    where: {
      groupId: { equals: input.groupId },
      userId: { in: input.userIds },
    },
  })
  return updated
}

export const reduceManyGroupPoints = async ({ input }) => {
  // TODO - check for return negative value
  return await db.groupPoint.updateMany({
    data: {
      points: {
        increment: input.points,
      },
    },
    where: {
      AND: [{ groupId: input.groupId }, { userId: { in: input.userIds } }],
    },
  })
}

export const deleteGroupPoints = () => {
  return db.groupPoint.deleteMany()
}

export const GroupPoint = {
  user: (_obj, { root }) =>
    db.groupPoint.findUnique({ where: { id: root.id } }).user(),
  group: (_obj, { root }) =>
    db.groupPoint.findUnique({ where: { id: root.id } }).group(),
}
