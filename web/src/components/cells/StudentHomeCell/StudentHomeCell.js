import NewEnrollment from 'src/components/Scaffolds/NewEnrollment/NewEnrollment'

export const QUERY = gql`
  query StudentHomeQuery($userId: String!) {
    enrollmentsOfUser(userId: $userId) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ userId }) => <NewEnrollment userId={userId} />

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ enrollmentsOfUser }) => {
  return JSON.stringify(enrollmentsOfUser)
}
