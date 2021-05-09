// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  groupId: '123',
  userId: '1234',
  user: {
    "__typename": "User",
    "profileImage": "https://lh3.googleusercontent.com/a-/AOh14GhN8ybeR1wF__VyMPE3ZiXxFQffKq584I4y7--Dmg=s96-c"
  },
  firstName: 'Abe',
  lastName: 'Babe',
  totalUserPoints: 5,
  userZero: '123445',
  setFirstName: () => {},
  setLastName: () => {},
  setStudentId: () => {},
  totalIsNull: true,
  setTotalPoints: () => {},
  selecting: false,
  handleSelect: () => {},
})
