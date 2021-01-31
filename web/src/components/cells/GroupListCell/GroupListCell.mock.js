// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  group: {
    __typename: 'Group',
    id: 'e5084a06-0113-40c2-993d-4934fe5f80a0',
    enrollId: 'test0005',
    enrollments: [
      {
        __typename: 'Enrollment',
        id: '51f92f35-2082-4216-970f-3173bf65df5b',
        user: {
          __typename: 'User',
          id: '8f5fb8cc-9e88-44be-8394-460a574c61e9',
          firstName: 'Random',
          lastName: 'Person',
          profileImage:
            'https://lh3.googleusercontent.com/a-/AOh14GguOCDDqN-etHC1jxaVKyVJI4gpxhF3TForFbFB=s96-c\t',
        },
      },
      {
        __typename: 'Enrollment',
        id: 'e7761b48-ea9a-495c-a163-b90d6e7a6c05',
        user: {
          __typename: 'User',
          id: 'b2ffc5c0-c5ca-4fe5-8ad4-9d0de620c664',
          firstName: 'Person',
          lastName: 'Two',
          profileImage:
            'https://lh3.googleusercontent.com/a-/AOh14GguOCDDqN-etHC1jxaVKyVJI4gpxhF3TForFbFB=s96-c\t',
        },
      },
      {
        __typename: 'Enrollment',
        id: '122d2937-6708-48d8-bfb9-682cb213bd9f',
        user: {
          __typename: 'User',
          id: '096ba37e-56e1-417c-9787-0d2c266c863f',
          firstName: 'Ryan',
          lastName: 'Doyle',
          profileImage:
            'https://lh3.googleusercontent.com/a-/AOh14GhN8ybeR1wF__VyMPE3ZiXxFQffKq584I4y7--Dmg=s96-c',
        },
      },
    ],
    behaviors: [
      {
        __typename: 'Behavior',
        id: '6466bae3-464f-4cbb-b53d-f404c5791947',
        name: 'Helping',
      },
      {
        __typename: 'Behavior',
        id: '4063eb56-9631-4204-bbc8-1533771ec461',
        name: 'Working Hard',
      },
      {
        __typename: 'Behavior',
        id: '684264fd-3516-4700-af61-0fb2253d8bec',
        name: 'On Time',
      },
      {
        __typename: 'Behavior',
        id: '24fd0dc6-a170-4fa2-a547-e1c0fbbd3b95',
        name: 'On Task',
      },
    ],
  },
})
