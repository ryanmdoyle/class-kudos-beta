export const schema = gql`
  type Email {
    id: String
    studentEmail: String!
    teacherEmail: String!
    groupId: String!
    groupName: String!
    message: String!
    subject: String!
    value: Int
  }

  input RedeemedNotification {
    studentEmail: String!
    teacherEmail: String!
    groupId: String!
    groupName: String!
    message: String!
    subject: String!
    value: Int
  }

  type Query {
    getReddemedNotifications: [Email!]!
  }

  type Mutation {
    sendRedeemedNotification(input: RedeemedNotification!): Email!
  }
`
