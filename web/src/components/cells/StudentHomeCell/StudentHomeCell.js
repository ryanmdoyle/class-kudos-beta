import NewEnrollmentByEnrollId from 'src/components/NewEnrollmentByEnrollId/NewEnrollmentByEnrollId'

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
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ userId }) => <NewEnrollmentByEnrollId userId={userId} />

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user }) => {
  return JSON.stringify(user)
}
