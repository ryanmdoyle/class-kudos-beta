import { Redirect, routes } from '@redwoodjs/router'
import GroupList from 'src/components/GroupList/GroupList'

export const QUERY = gql`
  query GroupStudentListQuery($id: String!) {
    group(id: $id) {
      id
      enrollId
      name
    }
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
      value
    }
  }
`

export const Loading = () => (
  <div className="col-span-4 overflow-scroll2xl:col-span-5 p-1 animate-pulse">
    <li className="h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2">
      <div className="flex items-center">
        <img
          src="/profile.jpg"
          alt="profile"
          className="img-loading h-6 w-6 rounded-full mr-2"
        ></img>
        <div className="w-36 h-4 rounded bg-gray-200"></div>
      </div>
      <div>
        <div className="justify-self-end text-green-500 font-bold text-loading bg-gray-200 w-6 h-4 rounded"></div>
      </div>
    </li>
  </div>
)

// In this component, empty/failure means the group filed to query.
// the GroupList component handles display if enrollmentsOfGroup is empty
export const Empty = () => <Redirect to={routes.teacherHome()} />
export const Failure = () => {
  return <Redirect to={routes.teacherHome()} />
}

export const Success = ({
  id,
  enrollmentsOfGroup,
  behaviorsOfGroup,
  group,
}) => {
  return (
    <GroupList
      groupId={id}
      name={group.name}
      enrollId={group.enrollId}
      enrollmentsOfGroup={enrollmentsOfGroup}
      behaviorsOfGroup={behaviorsOfGroup}
    />
  )
}
