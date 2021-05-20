export const QUERY = gql`
  query RedeemedOfGroupToReviewCountQuery($groupId: String!) {
    redeemedOfGroupToReview(groupId: $groupId) {
      id
    }
  }
`
export const beforeQuery = (props) => {
  return { variables: props, pollInterval: 60000 }
}

export const Loading = () => null

export const Empty = () => null

export const Failure = () => null

export const Success = ({ redeemedOfGroupToReview, subNav }) => {
  if (subNav) {
    return (
      <span className='w-5 h-5 rounded-full bg-white absolute top-1 -right-6 text-xs text-purple-700 flex justify-center items-center'>{redeemedOfGroupToReview.length > 99 ? "99" : redeemedOfGroupToReview.length}</span>
    )
  }
  return (
    <span className="w-8 h-full absolute inset-y-0 right-0 flex justify-center items-center">
      <span className="w-6 h-6 rounded-full bg-purple-200 text-xs flex justify-center items-center">{redeemedOfGroupToReview.length > 99 ? "99" : redeemedOfGroupToReview.length}</span>
    </span>
  )
}
