export const schema = gql`
  type Behavior {
    id: String!
    name: String!
    value: Int!
    group: Group!
    groupId: String!
    feedback: [Feedback]!
  }

  type Query {
    behaviors: [Behavior!]!
    behavior(id: String!): Behavior
    behaviorsOfGroup(groupId: String!): [Behavior!]!
    behaviorsOwned(userId: String!): [Behavior!]!
  }

  input CreateBehaviorInput {
    name: String!
    value: Int!
    groupId: String!
  }

  input UpdateBehaviorInput {
    name: String
    value: Int
    groupId: String
  }

  type Mutation {
    createBehavior(input: CreateBehaviorInput!): Behavior!
    updateBehavior(id: String!, input: UpdateBehaviorInput!): Behavior!
    deleteBehavior(id: String!): Behavior!
  }
`
