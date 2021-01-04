export const QUERY = gql`
  query FeedbackPointsQuery($userId: String!) {
    feedbacksOfUser(userId: $userId) {
      id
      createdAt
      behavior {
        id
        name
        value
      }
    }
  }
`

export const Loading = ({ loadingValue }) => loadingValue

export const Empty = () => 0

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ feedbacksOfUser }) => {
  return feedbacksOfUser.reduce((accumulator, currentFeedback) => {
    return accumulator + currentFeedback.behavior.value
  }, 0)
}
