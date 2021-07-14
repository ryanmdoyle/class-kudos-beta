export const schema = gql`
  type Group {
    id: String!
    type: String!
    name: String!
    description: String
    enrollId: String
    owner: User!
    ownerId: String!
    archived: Boolean!
    enrollments: [Enrollment]!
    behaviors: [Behavior]!
    rewards: [Reward]!
    feedback: [Feedback]!
    groupPoints: [GroupPoint]!
  }

  type Query {
    groups: [Group!]!
    group(id: String!): Group
    groupsOwned(userId: String!): [Group!]!
    groupsEnrolled(userId: String!): [Group!]!
  }

  input CreateGroupInput {
    type: String!
    name: String!
    description: String
    enrollId: String
    ownerId: String!
  }

  input UpdateGroupInput {
    type: String
    name: String
    description: String
    enrollId: String
    ownerId: String
  }

  type Mutation {
    createGroup(input: CreateGroupInput!): Group!
    updateGroup(id: String!, input: UpdateGroupInput!): Group!
    deleteGroup(id: String!): Group!
    archiveGroup(id: String!): Group!
  }
`
