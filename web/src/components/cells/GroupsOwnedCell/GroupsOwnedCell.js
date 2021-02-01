import TeacherNavLink from 'src/components/TeacherNavLink/TeacherNavLink'

export const QUERY = gql`
  query GroupsOwnedQuery($userId: String!) {
    groupsOwned(userId: $userId) {
      id
      type
      name
    }
  }
`
export const afterQuery = (data) => {
  return {
    primary: data.groupsOwned.filter((group) => group.type === 'primary'),
    secondary: data.groupsOwned.filter((group) => group.type === 'secondary'),
  }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ primary, secondary }) => {
  return (
    <>
      {primary?.length > 0 && (
        <>
          <span className="text-lg font-display mb-2 mt-2">Classes</span>
          <ul>
            {primary?.map((group) => (
              <TeacherNavLink id={group.id} key={group.id} text={group.name} />
            ))}
          </ul>
        </>
      )}
      {secondary?.length > 0 && (
        <>
          <span className="text-lg font-display mb-2 mt-2">Groups</span>
          <ul>
            {secondary?.map((group) => (
              <TeacherNavLink id={group.id} key={group.id} text={group.name} />
            ))}
          </ul>
        </>
      )}
    </>
  )
}
