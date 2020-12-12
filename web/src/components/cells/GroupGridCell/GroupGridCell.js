import GridStudentSquare from 'src/components/GridStudentSquare/GridStudentSquare'
import GroupGrid from 'src/components/GroupGrid/GroupGrid'

export const QUERY = gql`
  query GroupGridQuery($id: String!) {
    enrollmentsOfGroup(groupId: $id) {
      id
      user {
        id
        firstName
        lastName
        profileImage
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ enrollmentsOfGroup }) => {
  return <GroupGrid enrollmentsOfGroup={enrollmentsOfGroup} />
}
