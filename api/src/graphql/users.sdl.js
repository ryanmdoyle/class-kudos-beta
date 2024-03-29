export const schema = gql`
  type User {
    id: String!
    uid: String!
    firstName: String!
    lastName: String!
    email: String!
    profileImage: String
    createdAt: DateTime!
    updatedAt: DateTime!
    points: Int!
    roles: [UserRole]!
    feedback: [Feedback]!
    redeemed: [Redeemed]!
    groups: [Group]!
    enrollments: [Enrollment]!
    groupPoints: [GroupPoint]!
  }

  input CreateUserInput {
    uid: String!
    firstName: String!
    lastName: String!
    email: String!
    profileImage: String
  }

  input UpdateUserInput {
    uid: String
    firstName: String
    lastName: String
    email: String
    profileImage: String
    points: Int
  }

  input UpdateUserPointsInput {
    id: String!
    points: Int!
  }

  input UpdateUsersPointsInput {
    ids: [String!]!
    points: Int!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
    usersOfGroup(groupId: String!): [User!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    updateUserPoints(input: UpdateUserPointsInput!): User!
    updateUsersPoints(input: [UpdateUsersPointsInput!]!): [User!]!
    updateUserPointsFromGroupPoints(id: String!, points: Int!): User!
    addUserPoints(id: String!, points: Int!): User!
    reduceUserPoints(id: String!, points: Int!): User!
    addUsersPoints(input: [UpdateUserPointsInput!]!): [User!]!
    reduceUsersPoints(input: [UpdateUserPointsInput!]!): [User!]!
    deleteUser(id: String!): User!
  }
`
