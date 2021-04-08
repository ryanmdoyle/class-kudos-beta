export const schema = gql`
  type Reward {
    id: String!
    name: String!
    cost: Int!
    responseRequired: Boolean!
    responsePrompt: String
    group: Group!
    groupId: String!
    redeemed: [Redeemed]!
  }

  type Query {
    rewards: [Reward!]!
    reward(id: String!): Reward
    rewardsOfGroup(groupId: String!): [Reward!]!
  }

  input CreateRewardInput {
    name: String!
    cost: Int!
    responseRequired: Boolean!
    responsePrompt: String
    groupId: String!
  }

  input UpdateRewardInput {
    name: String
    cost: Int
    responseRequired: Boolean
    responsePrompt: String
    groupId: String
  }

  type Mutation {
    createReward(input: CreateRewardInput!): Reward!
    updateReward(id: String!, input: UpdateRewardInput!): Reward!
    deleteReward(id: String!): Reward!
  }
`
