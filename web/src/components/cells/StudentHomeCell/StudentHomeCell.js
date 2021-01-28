import NewEnrollmentByEnrollId from 'src/components/NewEnrollmentByEnrollId/NewEnrollmentByEnrollId'
import StudentGroupCard from 'src/components/StudentGroupCard/StudentGroupCard'

export const QUERY = gql`
  query StudentHomeQuery($userId: String!) {
    user(id: $userId) {
      id
      firstName
      lastName
      enrollments {
        id
        group {
          id
          name
          description
          type
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ userId }) => <NewEnrollmentByEnrollId userId={userId} />

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user, userId }) => {
  if (!user || user.enrollments.length === 0) return <Empty />
  const primaryEnrollments = user?.enrollments.filter(
    (enrollment) => enrollment.group.type === 'primary'
  )
  const secondaryEnrollments = user?.enrollments.filter(
    (enrollment) => enrollment.group.type === 'secondary'
  )
  return (
    <div className="flex flex-col lg:flex-row">
      {primaryEnrollments.length > 0 && (
        <div id="classes" className="w-100 lg:w-1/2 pr-2">
          <h1 className="text-2xl font-display mb-4">Classes</h1>
          {primaryEnrollments.map((enrollment) => (
            <StudentGroupCard
              key={enrollment.id}
              name={enrollment.group.name}
              description={enrollment.group.description}
              groupType={enrollment.group.type}
              userId={userId}
            />
          ))}
        </div>
      )}
      {secondaryEnrollments.length > 0 && (
        <div id="classes" className="w-100 lg:w-1/2 pr-2">
          <h1 className="text-2xl font-display mb-4">Classes</h1>
          {secondaryEnrollments.map((enrollment) => (
            <StudentGroupCard
              key={enrollment.id}
              name={enrollment.group.name}
              description={enrollment.group.description}
              groupType={enrollment.group.type}
              userId={userId}
            />
          ))}
        </div>
      )}
    </div>
  )
}
