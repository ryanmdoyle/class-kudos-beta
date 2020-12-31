import Feedbacks from 'src/components/Scaffolds/Feedbacks'

export const QUERY = gql`
  query GroupFeedbackQuery($groupId: String!) {
    feedbacksOfGroup(groupId: $groupId) {
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
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ feedbacksOfGroup }) => {
  return JSON.parse(feedbacksOfGroup)
}
