import EnrolledOptionsListItem from 'src/components/EnrolledOptionsListItem/EnrolledOptionsListItem'
import LoadingOptionsListItem from 'src/components/LoadingOptionsListItem/LoadingOptionsListItem'

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

export const Loading = () => <LoadingOptionsListItem />

export const Empty = () => (
  <div className="text-gray-400">No students enrolled.</div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ enrollmentsOfGroup, groupId }) => {
  let sorted = enrollmentsOfGroup?.slice().sort((a, b) => {
    const nameA =  a?.user?.firstName?.toLowerCase()
    const nameB =  b?.user?.firstName?.toLowerCase()
    return nameA < nameB ? -1 : 1
  })
  return (
    <ul className="w-full">
      {sorted?.map((enrollment) => (
        <EnrolledOptionsListItem
          enrollment={enrollment}
          key={enrollment.id}
          groupId={groupId}
        />
      ))}
    </ul>
  )
}
