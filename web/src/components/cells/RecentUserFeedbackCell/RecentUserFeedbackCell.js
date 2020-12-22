import ListViewRecentItem from 'src/components/ListViewRecentItem/ListViewRecentItem'

export const QUERY = gql`
  query RecentUserFeedbackQuery($userId: String!) {
    feedbacksOfUser(userId: $userId) {
      id
      createdAt
      behavior {
        id
        name
        value
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div className="text-gray-500">No feedback yet!</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ feedbacksOfUser }) => {
  return (
    <ul>
      {feedbacksOfUser.map((feedback) => (
        <ListViewRecentItem
          key={feedback.id}
          name={feedback.behavior.name}
          value={feedback.behavior.value}
          createdAt={feedback.createdAt}
        />
      ))}
    </ul>
  )
}
