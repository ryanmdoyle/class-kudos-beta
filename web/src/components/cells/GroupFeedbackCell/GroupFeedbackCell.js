import RecentGroupFeedback from 'src/components/RecentGroupFeedback/RecentGroupFeedback'
import { MetaTags } from '@redwoodjs/web'

export const QUERY = gql`
  query GroupFeedbackQuery($groupId: String!) {
    group(id: $groupId) {
      name
    }
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
export const beforeQuery = (props) => {
  return { variables: props, pollInterval: 60000 }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ groupId, feedbackOfGroup, group }) => {
  return (
    <>
      <MetaTags
        title={`Class Kudos - ${group.name} Feedback`}
        description={`Feedback page for ${group.name}`}
      />
      <RecentGroupFeedback
        feedbacksOfGroup={feedbackOfGroup}
        groupId={groupId}
      />
    </>
  )
}
