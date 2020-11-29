import PrimaryEnrollment from 'src/components/Scaffolds/PrimaryEnrollment'

export const QUERY = gql`
  query FIND_PRIMARY_ENROLLMENT_BY_ID($id: String!) {
    primaryEnrollment: primaryEnrollment(id: $id) {
      id
      userId
      primaryGroupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PrimaryEnrollment not found</div>

export const Success = ({ primaryEnrollment }) => {
  return <PrimaryEnrollment primaryEnrollment={primaryEnrollment} />
}
