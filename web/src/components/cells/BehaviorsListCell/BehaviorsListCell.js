export const QUERY = gql`
  query BehaviorsListQuery($groupId: String!) {
    behaviorsOfGroup(groupId: $groupId) {
      id
      name
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ behaviorsOfGroup }) => {
  return JSON.stringify(behaviorsOfGroup)
}
