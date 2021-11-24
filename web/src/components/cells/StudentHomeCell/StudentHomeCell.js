import NewEnrollmentByEnrollId from 'src/components/NewEnrollmentByEnrollId/NewEnrollmentByEnrollId'
import StudentGroupCard from 'src/components/StudentGroupCard/StudentGroupCard'
import StudentGroupCardLoader from 'src/components/StudentGroupCardLoader/StudentGroupCardLoader'

export const QUERY = gql`
  query StudentHomeQuery($userId: String!) {
    user(id: $userId) {
      id
      firstName
      lastName
    }
    groupsEnrolled(userId: $userId) {
      id
      name
      description
      type
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, pollInterval: 900000 }
}

export const Loading = () => (
  <div className="flex flex-col lg:flex-row">
    <div id="classes" className="w-100 lg:w-1/2 pr-2">
      <h1 className="text-2xl font-display mb-4">Classes</h1>
      <StudentGroupCardLoader />
    </div>
    <div id="classes" className="w-100 lg:w-1/2 pr-2">
      <h1 className="text-2xl font-display mb-4">Groups</h1>
      <StudentGroupCardLoader />
    </div>
  </div>
)

export const Empty = () => {
  return <NewEnrollmentByEnrollId />
}

export const Failure = ({ error }) => (
  <div>
    <p className="py-4">
      Looks like you are not enrolled in any classes or groups!
    </p>

    <NewEnrollmentByEnrollId />
  </div>
)

export const Success = ({ user, userId, groupsEnrolled }) => {
  if (!user || groupsEnrolled.length === 0) return <Empty />
  const primary = groupsEnrolled.filter((group) => group.type === 'primary')
  const secondary = groupsEnrolled.filter((group) => group.type === 'secondary')
  return (
    <div className="flex flex-col lg:flex-row">
      {primary.length > 0 && (
        <div id="classes" className="w-100 lg:w-1/2 pr-2">
          <h1 className="text-2xl font-display mb-4">Classes</h1>
          {primary.map((group) => (
            <StudentGroupCard
              key={group.id}
              groupId={group.id}
              name={group.name}
              description={group.description}
              groupType={group.type}
              userId={userId}
            />
          ))}
        </div>
      )}
      {secondary.length > 0 && (
        <div id="classes" className="w-100 lg:w-1/2 pr-2">
          <h1 className="text-2xl font-display mb-4">Groups</h1>
          {secondary.map((group) => (
            <StudentGroupCard
              key={group.id}
              enrollmentId={'fix'}
              groupId={group.id}
              name={group.name}
              description={group.description}
              groupType={group.type}
              userId={userId}
            />
          ))}
        </div>
      )}
    </div>
  )
}
