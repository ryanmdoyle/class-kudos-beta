import Enrollment from 'src/components/Scaffolds/Enrollment'

export const QUERY = gql`
  query FIND_ENROLLMENT_BY_ID($id: String!) {
    enrollment: enrollment(id: $id) {
      id
      userId
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Enrollment not found</div>

export const Success = ({ enrollment }) => {
  return <Enrollment enrollment={enrollment} />
}
