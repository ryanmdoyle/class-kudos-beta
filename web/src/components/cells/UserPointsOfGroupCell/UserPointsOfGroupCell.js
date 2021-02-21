export const QUERY = gql`
  query GroupPointsQuery($userId: String!, $groupId: String!) {
    feedbackOfUserForGroup(userId: $userId, groupId: $groupId) {
      id
      behavior {
        id
        value
      }
    }
  }
`

export const Loading = () => (
  <span className="animate-pulse text-green-500">...</span>
)

export const Empty = () => 0

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ feedbackOfUserForGroup }) => {
  return (
    feedbackOfUserForGroup?.reduce((accumulator, currentFeedback) => {
      return accumulator + currentFeedback.behavior.value
    }, 0) || 0
  )
}
