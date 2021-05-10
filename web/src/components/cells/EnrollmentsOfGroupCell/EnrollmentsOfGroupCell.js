import EnrolledOptionsListItem from 'src/components/EnrolledOptionsListItem/EnrolledOptionsListItem'
export const QUERY = gql`
  query EnrollmentsOfGroupQuery($groupId: String!) {
    enrollmentsOfGroup(groupId: $groupId) {
      id
      user {
        id
        firstName
        lastName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ enrollmentsOfGroup, groupId }) => {
  return (
    <ul className="w-full">
      {enrollmentsOfGroup?.map((enrollment) => (
        <EnrolledOptionsListItem
          enrollment={enrollment}
          key={enrollment.id}
          groupId={groupId}
        />
      ))}
    </ul>
  )
}
