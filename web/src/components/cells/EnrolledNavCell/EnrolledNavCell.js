import StudentNavLink from 'src/components/StudentNavLink/StudentNavLink'

export const QUERY = gql`
  query EnrolledNavQuery($userId: String!) {
    enrollmentsOfUser(userId: $userId) {
      id
      group {
        id
        name
        type
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => null

export const Failure = () => null

export const Success = ({ enrollmentsOfUser }) => {
  const primaryEnrolled = enrollmentsOfUser?.filter(
    (enrollment) => enrollment.group.type === 'primary'
  )
  const secondaryEnrolled = enrollmentsOfUser?.filter(
    (enrollment) => enrollment.group.type === 'secondary'
  )
  return (
    <>
      {primaryEnrolled?.length > 0 && (
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
      {secondaryEnrolled?.length > 0 && (
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
