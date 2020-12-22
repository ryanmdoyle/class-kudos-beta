export const schema = gql`
  type Feedback {
    id: String!
    type: String!
    createdAt: DateTime!
    user: User!
    userId: String!
    behavior: Behavior!
    behaviorId: String!
  }

  type Query {
    feedbacks: [Feedback!]!
    feedback(id: String!): Feedback
    feedbacksOfUser(userId: String!): [Feedback!]!
  }

  input CreateFeedbackInput {
    type: String!
    userId: String!
    behaviorId: String!
  }

  input UpdateFeedbackInput {
    type: String
    userId: String
    behaviorId: String
  }

  type Mutation {
    createFeedback(input: CreateFeedbackInput!): Feedback!
    updateFeedback(id: String!, input: UpdateFeedbackInput!): Feedback!
    deleteFeedback(id: String!): Feedback!
  }
`
