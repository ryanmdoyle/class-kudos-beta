// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  redeemedOfGroupToReview: [
    {
      __typename: 'Redeemed',
      id: '7fbfa056',
      createdAt: '2021-04-20T20:18:13.373Z',
      name: 'Homework Pass',
      cost: 15,
      response: 'Some response',
      user: {
        __typename: 'User',
        id: '3c419b2c',
        firstName: 'Ryan',
        lastName: 'Doyle',
        profileImage: 'some image link',
      },
    },
  ],
})
