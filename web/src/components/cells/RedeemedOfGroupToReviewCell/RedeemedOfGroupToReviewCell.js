export const QUERY = gql`
  query RedeemedOfGroupToReviewQuery($groupId: String!) {
    redeemedOfGroupToReview(groupId: $groupId) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ redeemedOfGroupToReview }) => {
  return JSON.stringify(redeemedOfGroupToReview)
}
