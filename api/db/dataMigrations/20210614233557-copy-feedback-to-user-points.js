const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

// This entire thing needs PRISMA calls, not calls to the methods in my GQL services
export default async ({ db }) => {
  const users = await db.user.findMany()

  asyncForEach(users, async (user) => {
    // get user Points
    const allFeedback = await db.feedback.aggregate({
      where: {
        userId: user.id
      },
      sum: {
        value: true
      }
    });

    if (allFeedback.sum.value === null) {
      allFeedback.sum.value = 0;
    }

    const allRedeemed = await db.redeemed.aggregate({
      where: {
        userId: user.id
      },
      sum: {
        cost: true
      }
    });

    if (allRedeemed.sum.value === null) {
      allRedeemed.sum.value = 0;
    }

    const points = allFeedback.sum.value - allRedeemed.sum.cost

    await db.user.update({
      data: {points},
      where: {
        id: user.id
      }
    });
  })
}
