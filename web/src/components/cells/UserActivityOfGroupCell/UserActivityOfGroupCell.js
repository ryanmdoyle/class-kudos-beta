import ListViewRecentItem from 'src/components/ListViewRecentItem/ListViewRecentItem'

export const QUERY = gql`
  query UserActivityOfGroupQuery($userId: String!, $groupId: String!) {
    feedbackOfUserForGroup(userId: $userId, groupId: $groupId) {
      id
      createdAt
      name
      value
    }
    redeemedOfUserForGroup(userId: $userId, groupId: $groupId) {
      id
      createdAt
      name
      cost
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div className="text-gray-500">No feedback yet!</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ feedbackOfUserForGroup, redeemedOfUserForGroup }) => {
  const newArray = [...redeemedOfUserForGroup, ...feedbackOfUserForGroup]
  const sorted = newArray
    ? newArray
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
    : null
  return (
    <>
      {sorted ? (
        <ul>
          {sorted.map((feedback) => (
            <ListViewRecentItem
              key={feedback.id}
              name={feedback.name}
              value={feedback.value || feedback.cost || 'n/a'}
              createdAt={feedback.createdAt}
            />
          ))}
        </ul>
      ) : null}
    </>
  )
}
