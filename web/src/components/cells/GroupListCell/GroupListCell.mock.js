// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  id: "2345678",
  enrollmentsOfGroup: [
    {
        "__typename": "Enrollment",
        "id": "85ba539a-a17c-4eb3-a1ea-52306d6213e7",
        "user": {
            "__typename": "User",
            "id": "3c419b2c-4bc4-49e1-973b-99bd85092d5f",
            "firstName": "Ryan",
            "lastName": "Doyle",
            "profileImage": "https://lh3.googleusercontent.com/a-/AOh14GhN8ybeR1wF__VyMPE3ZiXxFQffKq584I4y7--Dmg=s96-c"
        }
    },
    {
        "__typename": "Enrollment",
        "id": "fc587cea-9b40-4a0a-a67b-60422ea9fb06",
        "user": {
            "__typename": "User",
            "id": "4f2060b4-6575-4b9b-abd7-d811a0c14daf",
            "firstName": "Steve",
            "lastName": "Jorbs",
            "profileImage": null
        }
    }
],
  behaviorsOfGroup: [
    {
        "__typename": "Behavior",
        "id": "23735d03-ba80-4cc4-ad07-af6d4980bfb1",
        "name": "A negative thing",
        "value": -1
    },
    {
        "__typename": "Behavior",
        "id": "a2b7cde4-b9c5-42b6-a831-742df6f7857a",
        "name": "Helping",
        "value": 1
    },
    {
        "__typename": "Behavior",
        "id": "a59ee02d-7225-4453-870c-89f1d0bcb7bc",
        "name": "On Time",
        "value": 1
    },
    {
        "__typename": "Behavior",
        "id": "f483237d-727e-42d4-8744-2cebbd4d8471",
        "name": "Participating",
        "value": 1
    },
    {
        "__typename": "Behavior",
        "id": "f68d9db1-78f2-4e2c-95fb-3fdc66ca8b75",
        "name": "On Task",
        "value": 1
    },
    {
        "__typename": "Behavior",
        "id": "304f1317-b775-4704-a02d-457e73d911b5",
        "name": "Working Hard",
        "value": 5
    }
],
  group: {
    "__typename": "Group",
    "id": "94146f1c-0ee2-4a64-8121-0fa1e68e4238",
    "enrollId": "00001",
    "name": "Math 6"
  },
})
