export const schema = gql`
  type Enrollment {
    id: String!
    user: User!
    userId: String!
    group: Group!
    groupId: String!
  }

  type Query {
    enrollments: [Enrollment!]!
    enrollment(id: String!): Enrollment
    enrollmentsOfGroup(groupId: String!): [Enrollment!]!
    enrollmentsOfUser(userId: String!): [Enrollment!]!
    enrollmentsOfInstructor(userId: String!): [Enrollment!]!
  }

  type Mutation {
    createEnrollment(input: CreateEnrollmentInput!): Enrollment!
    createEnrollmentByEnrollId(
      input: CreateEnrollmentByEnrollIdInput!
    ): Enrollment!
    updateEnrollment(id: String!, input: UpdateEnrollmentInput!): Enrollment!
    deleteEnrollment(id: String!): Enrollment!
    deleteEnrollmentByStudent(userId: String!, groupId: String!): Enrollment!
  }

  input CreateEnrollmentInput {
    userId: String!
    groupId: String!
  }

  input UpdateEnrollmentInput {
    userId: String
    groupId: String
  }

  input CreateEnrollmentByEnrollIdInput {
    userId: String!
    enrollId: String!
  }
`
