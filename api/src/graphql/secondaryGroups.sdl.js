export const schema = gql`
  type SecondaryGroup {
    id: String!
    name: String!
    owner: User!
    ownerId: String!
    SecondaryEnrollment: [SecondaryEnrollment]!
  }

  type Query {
    secondaryGroups: [SecondaryGroup!]!
    secondaryGroup(id: String!): SecondaryGroup
    # Custom
    secondaryGroupsOwned: [SecondaryGroup]!
  }

  input CreateSecondaryGroupInput {
    name: String!
    ownerId: String!
  }

  input UpdateSecondaryGroupInput {
    name: String
    ownerId: String
  }

  type Mutation {
    createSecondaryGroup(input: CreateSecondaryGroupInput!): SecondaryGroup!
    updateSecondaryGroup(
      id: String!
      input: UpdateSecondaryGroupInput!
    ): SecondaryGroup!
    deleteSecondaryGroup(id: String!): SecondaryGroup!
  }
`
