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
  }

  type Query {
    users: [User!]!
    user(id: String!): User
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

  input UpdateUsersPointsInput {
    id: String!
    points: Int!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    updateUserPoints(id: String!, points: Int!): User!
    updateUsersPoints(input: [UpdateUsersPointsInput!]!): [User!]!
    addUserPoints(id: String!, points: Int!): User!
    reduceUserPoints(id: String!, points: Int!): User!
    deleteUser(id: String!): User!
  }
`
