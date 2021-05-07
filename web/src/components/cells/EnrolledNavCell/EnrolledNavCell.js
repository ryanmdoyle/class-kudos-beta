import StudentNavLink from 'src/components/StudentNavLink/StudentNavLink'

export const QUERY = gql`
  query EnrolledNavQuery($userId: String!) {
    groupsEnrolled(userId: $userId) {
      id
      name
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => null

export const Failure = () => null

export const Success = ({ groupsEnrolled }) => {
  const primary = groupsEnrolled?.filter((group) => group.type === 'primary')
  const secondary = groupsEnrolled?.filter(
    (group) => group.type === 'secondary'
  )
  return (
    <>
      {primary?.length > 0 && (
        <>
          <span className="text-lg font-display mb-2">Classes</span>
          <ul>
            {primary.map((group) => (
              <StudentNavLink id={group.id} key={group.id} text={group.name} />
            ))}
          </ul>
        </>
      )}
      {secondary?.length > 0 && (
        <>
          <span className="text-lg font-display mb-2">Groups</span>
          <ul>
            {secondary.map((group) => (
              <StudentNavLink id={group.id} key={group.id} text={group.name} />
            ))}
          </ul>
        </>
      )}
    </>
  )
}
