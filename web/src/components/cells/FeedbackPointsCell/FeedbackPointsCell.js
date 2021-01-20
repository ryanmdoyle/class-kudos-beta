export const QUERY = gql`
  query FeedbackPointsQuery($userId: String!) {
    user(id: $userId) {
      id
      createdAt
      feedback {
        behavior {
          id
          name
          value
        }
      }
    }
  }
`

export const Loading = ({ loadingValue }) => loadingValue

export const Empty = () => 0

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user }) => {
  return user.feedback.reduce((accumulator, currentFeedback) => {
    return accumulator + currentFeedback.behavior.value
  }, 0)
}
