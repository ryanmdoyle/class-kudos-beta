export const schema = gql`
  type Behavior {
    id: String!
    name: String!
    value: Int!
  }

  type Query {
    behaviors: [Behavior!]!
    behavior(id: String!): Behavior
  }

  input CreateBehaviorInput {
    name: String!
    value: Int!
  }

  input UpdateBehaviorInput {
    name: String
    value: Int
  }

  type Mutation {
    createBehavior(input: CreateBehaviorInput!): Behavior!
    updateBehavior(id: String!, input: UpdateBehaviorInput!): Behavior!
    deleteBehavior(id: String!): Behavior!
  }
`
