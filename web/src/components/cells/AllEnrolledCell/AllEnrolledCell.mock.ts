// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  enrollmentsOfInstructor: [
    {
      id: '123',
      user: {
        id: "1234",
        firstName: "test",
        lastName: "test",
        points: 1,
        enrollments: [
          { id: '1'},
          { id: '2'},
        ],
      },
    },
    {
      id: '1234',
      user: {
        id: "12345",
        firstName: "test 2",
        lastName: "test 2",
        points: 2,
        enrollments: [
          { id: '1'},
          { id: '2'},
        ],
      },
    }
  ],
})
