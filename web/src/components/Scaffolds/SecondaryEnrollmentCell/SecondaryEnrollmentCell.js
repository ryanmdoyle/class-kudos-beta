import SecondaryEnrollment from 'src/components/Scaffolds/SecondaryEnrollment'

export const QUERY = gql`
  query FIND_SECONDARY_ENROLLMENT_BY_ID($id: String!) {
    secondaryEnrollment: secondaryEnrollment(id: $id) {
      id
      userId
      secondaryGroupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SecondaryEnrollment not found</div>

export const Success = ({ secondaryEnrollment }) => {
  return <SecondaryEnrollment secondaryEnrollment={secondaryEnrollment} />
}
