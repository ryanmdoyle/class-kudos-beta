export const schema = gql`
  type PrimaryEnrollment {
    id: String!
    user: User!
    userId: String!
    primaryGroup: PrimaryGroup!
    primaryGroupId: String!
  }

  type Query {
    primaryEnrollments: [PrimaryEnrollment!]!
    primaryEnrollment(id: String!): PrimaryEnrollment
  }

  input CreatePrimaryEnrollmentInput {
    userId: String!
    primaryGroupId: String!
  }

  input UpdatePrimaryEnrollmentInput {
    userId: String
    primaryGroupId: String
  }

  type Mutation {
    createPrimaryEnrollment(
      input: CreatePrimaryEnrollmentInput!
    ): PrimaryEnrollment!
    updatePrimaryEnrollment(
      id: String!
      input: UpdatePrimaryEnrollmentInput!
    ): PrimaryEnrollment!
    deletePrimaryEnrollment(id: String!): PrimaryEnrollment!
  }
`
