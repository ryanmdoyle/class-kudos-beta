export const schema = gql`
  type Feedback {
    id: String!
    createdAt: DateTime!
    name: String!
    value: Int!
    user: User!
    userId: String!
    behavior: Behavior
    behaviorId: String
    groupId: String!
  }

  type Query {
    feedbacks: [Feedback!]!
    feedback(id: String!): Feedback
    feedbackOfUser(userId: String!): [Feedback!]!
    feedbackOfUserForGroup(userId: String!, groupId: String!): [Feedback!]!
    feedbackOfGroup(groupId: String!): [Feedback!]!
  }

  type Mutation {
    createFeedback(input: CreateFeedbackInput!): Feedback!
    createFeedbacks(input: [CreateFeedbackInput!]): CreatedManyReturn!
    updateFeedback(id: String!, input: UpdateFeedbackInput!): Feedback!
    deleteFeedback(id: String!): Feedback!
    deleteFeedbacks: BatchPayload!
  }

  input CreateFeedbackInput {
    userId: String!
    behaviorId: String
    groupId: String!
    name: String!
    value: Int!
  }

  input UpdateFeedbackInput {
    userId: String
    behaviorId: String
    name: String
    value: Int
  }

  type CreatedManyReturn {
    id: Int
    count: Int
  }

  type BatchPayload {
    count: Int
  }
`
