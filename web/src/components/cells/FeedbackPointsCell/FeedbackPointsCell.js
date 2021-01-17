export const QUERY = gql`
  query FeedbackPointsQuery($userId: String!) {
    user(id: $userId) {
      id
      feedback {
        id
        createdAt
        behavior {
          id
          name
          value
        }
      }
    }
  }
`

export const Loading = () => <div>...</div>

export const Empty = () => <div>0</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user }) => {
  return user.feedback.reduce((accumulator, currentFeedback) => {
    return accumulator + currentFeedback.behavior.value
  }, 0)
}
