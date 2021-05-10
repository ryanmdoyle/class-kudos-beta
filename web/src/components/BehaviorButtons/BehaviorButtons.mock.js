// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  userId: '3456789',
  behaviors: [
    {
      __typename: 'Behavior',
      id: '8cd971ab-fd60-4bba-b52d-96d83c0f8a63',
      name: 'Helping',
      value: 1,
    },
    {
      __typename: 'Behavior',
      id: 'ee9098a9-26d3-4163-95c3-83b43cfbba12',
      name: 'On Task',
      value: 1,
    },
    {
      __typename: 'Behavior',
      id: '4a443eb8-9301-40eb-8dac-ca1c224af18c',
      name: 'Working Hard',
      value: 1,
    },
  ],
  groupId: 'ec41a86b-f8e2-4a40-bf40-c8f94',
  selected: [],
  selecting: false,
  setSelecting: () => {
    console.log('set selecting')
  },
  setSelected: () => {
    console.log('set selected')
  },
})
