export const schema = gql`
  type UserRole {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    user: User
    userId: String
  }

  type Query {
    userRoles: [UserRole!]!
    userRole(id: String!): UserRole
  }

  input CreateUserRoleInput {
    name: String!
    userId: String
  }

  input UpdateUserRoleInput {
    name: String
    userId: String
  }

  type Mutation {
    createUserRole(input: CreateUserRoleInput!): UserRole!
    updateUserRole(id: String!, input: UpdateUserRoleInput!): UserRole!
    deleteUserRole(id: String!): UserRole!
    # Custom
    createAdminUserRole(input: CreateUserRoleInput!): UserRole!
    createSuperUserRole(input: CreateUserRoleInput!): UserRole!
  }
`
