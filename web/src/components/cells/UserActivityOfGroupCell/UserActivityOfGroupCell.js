import ListViewRecentItem from 'src/components/ListViewRecentItem/ListViewRecentItem'
import LoadingOptionsListItem from 'src/components/LoadingOptionsListItem/LoadingOptionsListItem'

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

export const Loading = () => <LoadingOptionsListItem />

export const Empty = () => (
  <div className="flex justify-center text-gray-500 mb-2">No feedback yet!</div>
)

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
          {sorted.map((activity) => (
            <ListViewRecentItem
              key={activity.id}
              name={activity.name}
              value={activity.value || activity.cost || 'n/a'}
              createdAt={activity.createdAt}
              activityType={activity.__typename}
            />
          ))}
        </ul>
      ) : null}
    </>
  )
}
