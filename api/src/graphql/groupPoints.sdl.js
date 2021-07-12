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
    updateGroupPoints(input: UpdateGroupPointInput!): GroupPoint!
    updateGroupsPoints(input: [UpdateGroupPointInput!]!): [GroupPoint!]!
    addGroupPoints(input: UpdateGroupPointInput!): GroupPoint!
    reduceGroupPoints(input: UpdateGroupPointInput!): GroupPoint!
    deleteGroupPoints: BatchPayload!
  }

  input CreateGroupPointInput {
    points: Int!
    userId: String!
    groupId: String!
  }

  input UpdateGroupPointInput {
    points: Int
    userId: String
    groupId: String
  }

  type BatchPayload {
    count: Int!
  }
`
