export const QUERY = gql`
  query FeedbackPointsQuery($userId: String!) {
    feedbackOfUser(userId: $userId) {
      id
      behavior {
        id
        value
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

export const Success = ({ feedbackOfUser }) => {
  return (
    feedbackOfUser?.reduce((accumulator, currentFeedback) => {
      return accumulator + currentFeedback.behavior.value
    }, 0) || 0
  )
}
