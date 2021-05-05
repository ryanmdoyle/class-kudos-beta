export const schema = gql`
  type Redeemed {
    id: String!
    user: User!
    userId: String!
    name: String!
    cost: Int!
    response: String
    reviewed: Boolean!
    reviewedAt: DateTime
    group: Group!
    groupId: String!
    createdAt: DateTime!
  }

  type Query {
    redeemeds: [Redeemed!]!
    redeemed(id: String!): Redeemed
    redeemedOfUser(userId: String!): [Redeemed!]!
    redeemedOfUserForGroup(userId: String!, groupId: String!): [Redeemed!]!
    redeemedOfGroup(groupId: String!): [Redeemed!]!
    redeemedOfGroupToReview(groupId: String!): [Redeemed!]!
    redeemedOfGroupReviewed(groupId: String!): [Redeemed!]!
  }

  input CreateRedeemedInput {
    userId: String!
    groupId: String!
    name: String!
    cost: Int!
    response: String
  }

  input UpdateRedeemedInput {
    userId: String
    groupId: String
    name: String
    cost: Int
    response: String
    reviewed: Boolean
    reviewedAt: DateTime
  }

  input UpdateRedeemedManyInput {
    id: String!
    name: String
    cost: Int
    response: String
    reviewed: Boolean
    reviewedAt: DateTime
    userId: String
    groupId: String
  }

  type Mutation {
    createRedeemed(input: CreateRedeemedInput!): Redeemed!
    updateRedeemed(id: String!, input: UpdateRedeemedInput!): Redeemed!
    deleteRedeemed(id: String!): Redeemed!
    approveRedeemed(id: String!): Redeemed!
    approveRedeemeds(ids: [UpdateRedeemedManyInput!]!): [Redeemed!]!
  }
`
