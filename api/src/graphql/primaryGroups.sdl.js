export const schema = gql`
  type PrimaryGroup {
    id: String!
    name: String!
    description: String!
    owner: User!
    ownerId: String!
    PrimaryEnrollment: [PrimaryEnrollment]!
  }

  type Query {
    primaryGroups: [PrimaryGroup!]!
    primaryGroup(id: String!): PrimaryGroup
    # Custom
    primaryGroupsOwned: [PrimaryGroup]!
  }

  input CreatePrimaryGroupInput {
    name: String!
    description: String!
    ownerId: String!
  }

  input UpdatePrimaryGroupInput {
    name: String
    description: String
    ownerId: String
  }

  type Mutation {
    createPrimaryGroup(input: CreatePrimaryGroupInput!): PrimaryGroup!
    updatePrimaryGroup(
      id: String!
      input: UpdatePrimaryGroupInput!
    ): PrimaryGroup!
    deletePrimaryGroup(id: String!): PrimaryGroup!
  }
`
