// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  feedbackOfUserForGroup: [
    {
      "__typename": "Feedback",
      "id": "11e10a68-8837-4863-96cf-0547865549af",
      "createdAt": "2021-04-20T20:16:42.427Z",
      "name": "Working Hard",
      "value": 5
    }
    ,{
      "__typename": "Feedback 2",
      "id": "11e10a68-8837-4863-96cf-0547865549af",
      "createdAt": "2021-04-21T20:16:42.427Z",
      "name": "Working Hard",
      "value": 6
    }
  ],
  redeemedOfUserForGroup: [
    {
      "__typename": "Redeemed",
      "id": "146fc837-e4f6-4a46-a467-b2000e41f511",
      "createdAt": "2021-05-05T22:00:59.474Z",
      "name": "Homework Pass",
      "cost": 15
    },
    {
      "__typename": "Redeemed",
      "id": "146fc837-e4f6-4a46-a467-b2000e41f511",
      "createdAt": "2021-05-05T22:00:59.474Z",
      "name": "Homework Late Credit",
      "cost": 8
    }
  ],
})
