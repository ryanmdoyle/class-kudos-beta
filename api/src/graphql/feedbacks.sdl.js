export const schema = gql`
  type Feedback {
    id: String!
    createdAt: DateTime!
    user: User!
    userId: String!
    behavior: Behavior!
    behaviorId: String!
    groupId: String!
  }

  type Query {
    feedbacks: [Feedback!]!
    feedback(id: String!): Feedback
    feedbackOfUser(userId: String!): [Feedback!]!
    feedbackOfUserForGroup(userId: String!, groupId: String!): [Feedback!]!
    feedbackOfGroup(groupId: String!): [Feedback!]!
  }

  input CreateFeedbackInput {
    userId: String!
    behaviorId: String!
    groupId: String!
  }

  input UpdateFeedbackInput {
    userId: String
    behaviorId: String
  }

  type Mutation {
    createFeedback(input: CreateFeedbackInput!): Feedback!
    updateFeedback(id: String!, input: UpdateFeedbackInput!): Feedback!
    deleteFeedback(id: String!): Feedback!
  }
`
