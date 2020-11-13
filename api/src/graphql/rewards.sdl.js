export const schema = gql`
  type Reward {
    id: String!
    name: String!
    cost: Int!
    Redeemed: [Redeemed]!
  }

  type Query {
    rewards: [Reward!]!
    reward(id: String!): Reward
  }

  input CreateRewardInput {
    name: String!
    cost: Int!
  }

  input UpdateRewardInput {
    name: String
    cost: Int
  }

  type Mutation {
    createReward(input: CreateRewardInput!): Reward!
    updateReward(id: String!, input: UpdateRewardInput!): Reward!
    deleteReward(id: String!): Reward!
  }
`
