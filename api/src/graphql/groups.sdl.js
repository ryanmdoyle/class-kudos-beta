export const schema = gql`
  type Group {
    id: String!
    type: String!
    name: String!
    description: String
    enrollId: String
    owner: User!
    ownerId: String!
    enrollments: [Enrollment]!
    behaviors: [Behavior]!
    rewards: [Reward]!
    feedback: [Feedback]!
  }

  type Query {
    groups: [Group!]!
    group(id: String!): Group
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
  }
`
