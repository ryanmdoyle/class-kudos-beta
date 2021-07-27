// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  behaviorsOwned: [
    {
      "__typename": "Behavior",
      "id": "d70a390d-df12-4cca-a187-90df388714a0",
      "name": "neg",
      "value": -3,
      "group": {
          "__typename": "Group",
          "id": "85762086-2698-4021-82ca-89caa540c77b",
          "name": "Math"
      }
    },
    {
      "__typename": "Behavior",
      "id": "d70a390d-df12-4cca-a187-90df388714a1",
      "name": "Pos",
      "value": 4,
      "group": {
          "__typename": "Group",
          "id": "85762086-2698-4021-82ca-89caa54077b",
          "name": "Math 2"
      }
    }
  ],
  groupsOwned: [
    {
      "__typename": "Group",
      "id": "34ff4de8-def2-46bb-a815-8e89bea94436",
      "name": "Test"
    },
    {
      "__typename": "Group",
      "id": "34ff4de8-def2-46bb-a815-8e89bea944362",
      "name": "Test 2"
    }
  ],
  parentGroupId: '1234567890',
})
