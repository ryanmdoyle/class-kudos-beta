import GroupList from 'src/components/GroupList/GroupList'

export const QUERY = gql`
  query GroupStudentListQuery($id: String!) {
    group(id: $id) {
      id
      enrollId
      enrollments {
        id
        user {
          id
          firstName
          lastName
          profileImage
          feedback {
            id
            behavior {
              id
              value
            }
          }
        }
      }
      behaviors {
        id
        name
      }
    }
  }
`

export const Loading = () => (
  <div className="col-span-4 overflow-scroll2xl:col-span-5 p-1">
    <li className="h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2">
      <div className="flex items-center">
        <img
          src="/profile.jpg"
          className="img-loading h-6 w-6 rounded-full mr-2"
        ></img>
        <span className="text-normal text-loading">Student Name</span>
      </div>
      <div>
        <span className="justify-self-end text-green-500 font-bold text-loading">
          79
        </span>
      </div>
    </li>
  </div>
)

export const Empty = ({ enrollId }) => (
  <div className="col-span-full overflow-scroll 2xl:col-span-5 p-1">
    No Students! Enroll new students with the code:{' '}
    <span className="font-bold">{enrollId}</span>
  </div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ id, group }) => {
  if (group.enrollments.length === 0)
    return <Empty enrollId={group?.enrollId} />
  return (
    <GroupList
      groupId={id}
      enrollmentsOfGroup={group.enrollments}
      behaviorsOfGroup={group.behaviors}
    />
  )
}
