import RecentGroupFeedback from 'src/components/RecentGroupFeedback/RecentGroupFeedback'

export const QUERY = gql`
  query GroupFeedbackQuery($groupId: String!) {
    feedbackOfGroup(groupId: $groupId) {
      id
      createdAt
      name
      value
      user {
        id
        firstName
        lastName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ groupId, feedbackOfGroup }) => {
  return (
    <RecentGroupFeedback feedbacksOfGroup={feedbackOfGroup} groupId={groupId} />
  )
}
