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

export const Success = ({ userId, groupType, user }) => {
  let groups = [...user.groups]
  // Optionally filter by type, if prop is passed
  if (groupType) {
    const filtered = groups.filter(
      (group) => group.type === groupType && group.ownerId === userId
    )
    groups = [...filtered]
  }
  return (
    <>
      {groupType === 'primary' && (
        <span className="text-lg font-display mb-2 mt-2">Classes</span>
      )}
      {groupType === 'secondary' && (
        <span className="text-lg font-display mb-2 mt-2">Groups</span>
      )}
      <ul>
        {groups.map((group) => (
          <TeacherNavLink id={group.id} key={group.id} text={group.name} />
        ))}
      </ul>
    </>
  )
}
