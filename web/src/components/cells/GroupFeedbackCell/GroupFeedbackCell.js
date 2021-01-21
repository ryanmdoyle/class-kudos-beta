import RecentGroupFeedback from 'src/components/RecentGroupFeedback/RecentGroupFeedback'

export const QUERY = gql`
  query GroupFeedbackQuery($groupId: String!) {
    group(id: $groupId) {
      id
      feedback {
        id
        createdAt
        user {
          id
          firstName
          lastName
        }
        behavior {
          id
          name
          value
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ groupId, group }) => {
  return (
    <RecentGroupFeedback feedbacksOfGroup={group.feedback} groupId={groupId} />
  )
}
