import { db } from 'src/lib/db'

const createBehaviors = async (groupId) => {
  const starters = [
    {
      name: 'Helping',
      value: 1,
    },
    {
      name: 'On Time',
      value: 1,
    },
    {
      name: 'On Task',
      value: 1,
    },
    {
      name: 'Participating',
      value: 1,
    },
    {
      name: 'Working Hard',
      value: 1,
    },
  ]

  return starters.forEach(async (behavior) => {
    const input = {
      name: behavior.name,
      value: behavior.value,
      groupId: groupId,
    }
    await db.behavior.create({
      data: input,
    })
  })
}

export default createBehaviors
