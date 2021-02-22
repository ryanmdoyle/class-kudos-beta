export const QUERY = gql`
  query RewardsOfGroupStudentQuery($groupId: String!) {
    rewardsOfGroup(groupId: $groupId) {
      id
      name
      cost
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ rewardsOfGroup }) => {
  return JSON.stringify(rewardsOfGroup)
}
