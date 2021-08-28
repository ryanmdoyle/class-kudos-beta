import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
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
  if (groupPoints + input.points >= 0) {
    return await db.groupPoint.update({
      data: {
        points: {
          increment: input.points, // points are neg, must increment. (adding negative to reduce)
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
          set: 0, // points are neg, must increment. (adding negative to reduce)
        },
      },
      where: {
        id: groupPoints.id,
      },
    })
  }
}

export const addManyGroupPoints = async ({ input }) => {
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
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof groupPoint>>) =>
    db.groupPoint.findUnique({ where: { id: root.id } }).user(),
  group: (_obj, { root }: ResolverArgs<ReturnType<typeof groupPoint>>) =>
    db.groupPoint.findUnique({ where: { id: root.id } }).group(),
}
