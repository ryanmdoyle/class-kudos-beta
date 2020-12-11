import TeacherNavLink from 'src/components/TeacherNavLink/TeacherNavLink'

export const QUERY = gql`
  query GroupsOwnedQuery {
    groupsOwned {
      id
      type
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ groupsOwned, groupType }) => {
  let groupsOfType = [...groupsOwned]
  // Optionally filter by type, if prop is passed
  if (groupType) {
    const filtered = groupsOfType.filter((group) => group.type === groupType)
    groupsOfType = [...filtered]
  }
  return (
    <ul>
      {groupsOfType.map((group) => (
        <TeacherNavLink id={group.id} key={group.id} text={group.name} />
      ))}
    </ul>
  )
}
