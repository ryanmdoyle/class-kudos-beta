// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  id: "2345678",
  group: {
    "__typename": "Group",
    "id": "94146f1c-0ee2-4a64-8121-0fa1e68e4238",
    "enrollId": "00001",
    "name": "Math 6"
  },
  usersOfGroup: [
    {
      id: 'test',
      firstName: 'test',
      lastName: 'test',
      profileImage: 'test',
      points: 5,
      groupPoints: [
        {
          id: '1',
          groupId: '1',
          points: 5,
        },
      ],
    },
  ],
  behaviorsOfGroup: [
    {
      id: '123',
      name: 'test behavior',
      value: 2,
    }
  ],
})
