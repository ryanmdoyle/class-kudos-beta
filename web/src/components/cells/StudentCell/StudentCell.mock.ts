// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  user: {
    id: '1',
    firstName: 'test',
    lastName: 'test',
    points: 3,
    enrollments:  [
      {
        id: '1',
        group: {
          id: '1',
          name: 'test group',
        }
      }
    ],
    feedback: [
      {
        id: 'test',
        name: 'test',
        value: 5,
        createdAt: 'test',
      }
    ],
    redeemed: [
      {
        id: 'test',
        name: 'test',
        cost: 5,
        createdAt: 'test',
      }
    ],
  },
})
