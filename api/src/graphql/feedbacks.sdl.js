export const schema = gql`
  type Feedback {
    id: String!
    type: String!
    createdAt: DateTime!
    user: User!
    userId: String!
  }

  type Query {
    feedbacks: [Feedback!]!
    feedback(id: String!): Feedback
  }

  input CreateFeedbackInput {
    type: String!
    userId: String!
  }

  input UpdateFeedbackInput {
    type: String
    userId: String
  }

  type Mutation {
    createFeedback(input: CreateFeedbackInput!): Feedback!
    updateFeedback(id: String!, input: UpdateFeedbackInput!): Feedback!
    deleteFeedback(id: String!): Feedback!
  }
`
