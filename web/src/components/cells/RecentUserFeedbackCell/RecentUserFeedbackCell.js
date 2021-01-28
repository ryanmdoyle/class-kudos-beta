import ListViewRecentItem from 'src/components/ListViewRecentItem/ListViewRecentItem'

export const QUERY = gql`
  query RecentUserFeedbackQuery($userId: String!) {
    user(id: $userId) {
      id
      feedback {
        id
        createdAt
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

export const Empty = () => <div className="text-gray-500">No feedback yet!</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user, feedback }) => {
  if (!user || user?.feedback.length === 0) return <Empty />
  const sorted = user?.feedback
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  return (
    <ul>
      {sorted.map((feedback) => (
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
