import { Redirect, routes } from '@redwoodjs/router'
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
    behaviorsOfGroup(groupId: $id) {
      id
      name
    }
    group(id: $id) {
      id
      enrollId
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

export const Empty = () => <Redirect to={routes.teacherHome()} />

export const Failure = () => {
  return <Redirect to={routes.teacherHome()} />
}

export const Success = ({
  id,
  enrollmentsOfGroup,
  behaviorsOfGroup,
  enrollId,
}) => {
  return (
    <GroupList
      groupId={id}
      enrollId={enrollId}
      enrollmentsOfGroup={enrollmentsOfGroup}
      behaviorsOfGroup={behaviorsOfGroup}
    />
  )
}
