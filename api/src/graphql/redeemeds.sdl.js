export const schema = gql`
  type Redeemed {
    id: String!
    user: User!
    userId: String!
    reward: Reward!
    rewardId: String!
    createdAt: DateTime!
  }

  type Query {
    redeemeds: [Redeemed!]!
    redeemed(id: String!): Redeemed
  }

  input CreateRedeemedInput {
    userId: String!
    rewardId: String!
  }

  input UpdateRedeemedInput {
    userId: String
    rewardId: String
  }

  type Mutation {
    createRedeemed(input: CreateRedeemedInput!): Redeemed!
    updateRedeemed(id: String!, input: UpdateRedeemedInput!): Redeemed!
    deleteRedeemed(id: String!): Redeemed!
  }
`
