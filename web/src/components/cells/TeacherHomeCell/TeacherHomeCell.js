import GroupCard from 'src/components/GroupCard/GroupCard'

export const QUERY = gql`
  query TeacherHomeQuery($userId: String!) {
    user(id: $userId) {
      id
    }
    groupsOwned(userId: $userId) {
      id
      type
      name
      description
      enrollId
      ownerId
      enrollments {
        id
        user {
          id
          firstName
          lastName
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>
    <p>Looks like you haven't created and classes or groups yet!</p>
    <br></br> <p>Click the green "Create New" button to get started.</p>
  </div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user, userId, groupsOwned }) => {
  if (!user || groupsOwned.length === 0) return <Empty />
  const primaryOwned = groupsOwned.filter(
    (group) => group.type === 'primary' && group.ownerId === userId
  )
  const secondaryOwned = groupsOwned.filter(
    (group) => group.type === 'secondary' && group.ownerId === userId
  )
  const primarySorted = primaryOwned.sort((a, b) => (b.name - a.name ? 1 : -1))
  const secondarySorted = secondaryOwned.sort((a, b) =>
    b.name - a.name ? 1 : -1
  )
  return (
    <div className="flex flex-col lg:flex-row">
      {primarySorted.length > 0 && (
        <div id="classes" className="w-100 lg:w-1/2 pr-2">
          <h1 className="text-2xl font-display mb-4">Classes</h1>
          {primarySorted.map((group) => (
            <GroupCard
              id={group.id}
              key={group.id}
              name={group.name}
              description={group.description}
              studentCount={group.enrollments.length}
              enrollId={group.enrollId}
              userId={userId}
            />
          ))}
        </div>
      )}
      {secondarySorted.length > 0 && (
        <div id="classes" className="w-100 lg:w-1/2 pr-2">
          <h1 className="text-2xl font-display mb-4">Groups</h1>
          {secondarySorted.map((group) => (
            <GroupCard
              id={group.id}
              key={group.id}
              name={group.name}
              description={group.description}
              studentCount={group.enrollments.length}
              enrollId={group.enrollId}
              userId={userId}
            />
          ))}
        </div>
      )}
    </div>
  )
}
