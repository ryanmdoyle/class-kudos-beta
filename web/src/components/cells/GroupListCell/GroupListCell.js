import GroupList from 'src/components/GroupList/GroupList'

export const QUERY = gql`
  query GroupStudentListQuery($id: String!) {
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

export const Empty = () => (
  <div className="col-span-4 overflow-scroll 2xl:col-span-5 p-1">
    No Students
  </div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ enrollmentsOfGroup }) => {
  return <GroupList enrollmentsOfGroup={enrollmentsOfGroup} />
}
