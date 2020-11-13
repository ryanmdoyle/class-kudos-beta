export const schema = gql`
  type User {
    id: String!
    firstName: String!
    lastName: String!
    email: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    roles: [UserRole]!
    Feedback: [Feedback]!
    Redeemed: [Redeemed]!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
