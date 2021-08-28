export const schema = gql`
  type GroupPoint {
    id: String!
    points: Int!
    user: User!
    userId: String!
    group: Group!
    groupId: String!
  }

  type Query {
    groupPoints: [GroupPoint!]!
    groupPointsOfUser(groupId: String!, userId: String!): GroupPoint!
  }

  type Mutation {
    createGroupPoints(input: CreateGroupPointInput): GroupPoint!
    updateGroupPoint(input: UpdateGroupPointInput!): GroupPoint!
    updateGroupPoints(input: UpdateGroupPointsInput!): [GroupPoint!]!
    addGroupPoints(input: UpdateGroupPointInput!): GroupPoint!
    reduceGroupPoints(input: UpdateGroupPointInput!): GroupPoint!
    addManyGroupPoints(input: UpdateGroupPointsInput!): BatchPayload!
    reduceManyGroupPoints(input: UpdateGroupPointsInput!): BatchPayload!
    deleteGroupPoints: BatchPayload!
  }

  input CreateGroupPointInput {
    userId: String!
    groupId: String!
  }

  input UpdateGroupPointInput {
    points: Int!
    userId: String!
    groupId: String!
  }

  input UpdateGroupPointsInput {
    userIds: [String!]!
    groupId: String!
    points: Int!
  }

  type BatchPayload {
    count: Int!
  }
`
