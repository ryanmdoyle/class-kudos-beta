// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  groupId: '1234',
  userId: '1234567',
  behaviorsOfGroup:[
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
  firstName: "Bob",
  selecting: false,
  selected: [
    "3c419b2c99bd85092d5f",
    "4f2060b4-811a0c14daf"
],
  setSelecting: () => {console.log('setSelecting')},
  setSelected: () => {console.log('setSelected')},
})
