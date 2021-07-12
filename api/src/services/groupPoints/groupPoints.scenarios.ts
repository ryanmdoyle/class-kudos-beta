import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GroupPointCreateArgs>({
  groupPoint: {
    one: {
      user: {
        create: {
          uid: 'String2547267',
          firstName: 'String',
          lastName: 'String',
          email: 'String1089693',
        },
      },
    },
    two: {
      user: {
        create: {
          uid: 'String8202320',
          firstName: 'String',
          lastName: 'String',
          email: 'String359840',
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
