export const QUERY = gql`
  query GroupPointsQuery($userId: String!, $groupId: String!) {
    feedbackOfUserForGroup(userId: $userId, groupId: $groupId) {
      id
      value
    }
  }
`
export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'cache-first',
  }
}

export const Loading = () => (
  <div className="w-6 h-6 text-purple-100 animate-spin">
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="12"
      strokeDasharray="175"
      strokeLinecap="round"
    >
      <circle cx="50" cy="50" r="35" />
    </svg>
  </div>
)

export const Empty = () => 0

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ feedbackOfUserForGroup }) => {
  return (
    feedbackOfUserForGroup?.reduce((accumulator, currentFeedback) => {
      return accumulator + currentFeedback.value
    }, 0) || 0
  )
}
