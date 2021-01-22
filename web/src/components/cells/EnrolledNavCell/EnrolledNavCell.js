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

export const Success = ({ groupType, user }) => {
  let enrollments = [...user.enrollments]
  // Optionally filter by type, if prop is passed
  if (groupType) {
    const filtered = enrollments.filter(
      (enrollment) => enrollment.group.type === groupType
    )
    enrollments = [...filtered]
  }
  if (enrollments.length === 0) return <Empty />
  return (
    <ul>
      {enrollments.map((enrollment) => (
        <StudentNavLink
          id={enrollment.group.id}
          key={enrollment.group.id}
          text={enrollment.group.name}
        />
      ))}
    </ul>
  )
}
