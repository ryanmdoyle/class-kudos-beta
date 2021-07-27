// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  parentGroupId: '123',
  rewardsOwned: [
    {
      id: 'test 1',
      name: 'test 1',
      cost: 1,
      responseRequired: true,
      responsePrompt: 'response prompt',
      group: {
        id: '123',
        name: 'group name',
      }
    }
  ],
  groupsOwned: [
    {
      id: '1232',
      name: 'group name',
    },
  ]
})
