import NewEnrollmentByEnrollId from 'src/components/NewEnrollmentByEnrollId/NewEnrollmentByEnrollId'

export const QUERY = gql`
  query StudentHomeQuery($userId: String!) {
    enrollmentsOfUser(userId: $userId) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ userId }) => <NewEnrollmentByEnrollId userId={userId} />

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ enrollmentsOfUser }) => {
  return JSON.stringify(enrollmentsOfUser)
}
