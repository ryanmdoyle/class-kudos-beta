export const QUERY = gql`
  query RedeemedOfGroupReviewedQuery($groupId: String!) {
    redeemedOfGroupReviewed(groupId: $groupId) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ redeemedOfGroupReviewed }) => {
  return JSON.stringify(redeemedOfGroupReviewed)
}
