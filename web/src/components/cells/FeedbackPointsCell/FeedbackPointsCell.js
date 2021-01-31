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
export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'cache-first',
  }
}

export const Loading = () => '...'

export const Empty = () => 0

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user }) => {
  if (!user) return <Empty />
  return user.feedback.reduce((accumulator, currentFeedback) => {
    return accumulator + currentFeedback.behavior.value
  }, 0)
}
