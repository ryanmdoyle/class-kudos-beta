import TeacherNavLink from 'src/components/TeacherNavLink/TeacherNavLink'

export const QUERY = gql`
  query GroupsOwnedQuery($userId: String!) {
    user(id: $userId) {
      id
      groups {
        id
        type
        name
        ownerId
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ userId, user }) => {
  const ownedGroups = user?.groups.filter((group) => group.ownerId === userId)
  const primaryOwned = ownedGroups?.filter((group) => group.type === 'primary')
  const secondaryOwned = ownedGroups?.filter(
    (group) => group.type === 'secondary'
  )
  return (
    <>
      {primaryOwned?.length > 0 && (
        <>
          <span className="text-lg font-display mb-2 mt-2">Classes</span>
          <ul>
            {primaryOwned.map((group) => (
              <TeacherNavLink id={group.id} key={group.id} text={group.name} />
            ))}
          </ul>
        </>
      )}
      {secondaryOwned?.length > 0 && (
        <>
          <span className="text-lg font-display mb-2 mt-2">Groups</span>
          <ul>
            {secondaryOwned.map((group) => (
              <TeacherNavLink id={group.id} key={group.id} text={group.name} />
            ))}
          </ul>
        </>
      )}
    </>
  )
}
