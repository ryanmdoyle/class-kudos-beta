export const schema = gql`
  type SecondaryEnrollment {
    id: String!
    user: User!
    userId: String!
    secondaryGroup: SecondaryGroup!
    secondaryGroupId: String!
  }

  type Query {
    secondaryEnrollments: [SecondaryEnrollment!]!
    secondaryEnrollment(id: String!): SecondaryEnrollment
    # custom
    secondaryEnrollmentsOfGroup: [SecondaryEnrollment!]!
  }

  input CreateSecondaryEnrollmentInput {
    userId: String!
    secondaryGroupId: String!
  }

  input UpdateSecondaryEnrollmentInput {
    userId: String
    secondaryGroupId: String
  }

  type Mutation {
    createSecondaryEnrollment(
      input: CreateSecondaryEnrollmentInput!
    ): SecondaryEnrollment!
    updateSecondaryEnrollment(
      id: String!
      input: UpdateSecondaryEnrollmentInput!
    ): SecondaryEnrollment!
    deleteSecondaryEnrollment(id: String!): SecondaryEnrollment!
  }
`
