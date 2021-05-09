// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  redeemedOfGroupReviewed: [
    {
      "__typename": "Redeemed",
      "id": "7fbfa056-7c-bb59-c0acc5",
      "reviewedAt": "2021-05-05T20:44:14.884Z",
      "name": "Homework Pass",
      "cost": 15,
      "user": {
          "__typename": "User",
          "id": "3c42c973b-9992d5f",
          "firstName": "Ryan",
          "lastName": "Doyle",
          "profileImage": "https://lh3.googleusercontent.com/a-/AOh14GhN8ybeR1wF"
      }
  },
  {
    "__typename": "Redeemed",
    "id": "7fbfa056-76f59-c0a82a611cc5",
    "reviewedAt": "2021-05-06T20:44:14.884Z",
    "name": "Homework Late Pass",
    "cost": 5,
    "user": {
        "__typename": "User",
        "id": "3c4b1-97b-99bd809d5f",
        "firstName": "Ryan",
        "lastName": "Doyle",
        "profileImage": "https://lh3.googleusercontent.com/a-/AOh"
    }
}
],
})
