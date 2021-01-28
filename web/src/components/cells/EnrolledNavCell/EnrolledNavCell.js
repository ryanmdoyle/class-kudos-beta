import StudentNavLink from 'src/components/StudentNavLink/StudentNavLink'

export const QUERY = gql`
  query EnrolledNavQuery($userId: String!) {
    user(id: $userId) {
      id
      enrollments {
        id
        group {
          id
          name
          type
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => null

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user }) => {
  if (user?.enrollments.length === 0 || !user) return <Empty />
  const primaryEnrolled = user?.enrollments.filter(
    (enrollment) => enrollment.group.type === 'primary'
  )
  const secondaryEnrolled = user?.enrollments.filter(
    (enrollment) => enrollment.group.type === 'secondary'
  )
  return (
    <>
      {primaryEnrolled.length > 0 && (
        <>
          <span className="text-lg font-display mb-2">Classes</span>
          <ul>
            {primaryEnrolled.map((enrollment) => (
              <StudentNavLink
                id={enrollment.group.id}
                key={enrollment.group.id}
                text={enrollment.group.name}
              />
            ))}
          </ul>
        </>
      )}
      {secondaryEnrolled.length > 0 && (
        <>
          <span className="text-lg font-display mb-2">Groups</span>
          <ul>
            {secondaryEnrolled.map((enrollment) => (
              <StudentNavLink
                id={enrollment.group.id}
                key={enrollment.group.id}
                text={enrollment.group.name}
              />
            ))}
          </ul>
        </>
      )}
    </>
  )
}
