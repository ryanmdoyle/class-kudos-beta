import { Redirect, routes } from '@redwoodjs/router'
import GroupList from 'src/components/GroupList/GroupList'

export const QUERY = gql`
  query GroupStudentListQuery($id: String!) {
    group(id: $id) {
      id
      enrollId
      name
    }
    usersOfGroup(groupId: $id) {
      id
        firstName
        lastName
        profileImage
        points
        groupPoints {
          id
          groupId
          points
        }
    }
    # enrollmentsOfGroup(groupId: $id) {
    #   id
    #   user {
    #     id
    #     firstName
    #     lastName
    #     profileImage
    #     points
    #     groupPoints {
    #       id
    #       groupId
    #       points
    #     }
    #   }
    # }
    behaviorsOfGroup(groupId: $id) {
      id
      name
      value
    }
  }
`

export const Loading = () => (
  <>
    <div className="col-span-4 overflow-scroll p-1">
      <button className={`button-white mr-4 w-52 mb-4`}></button>
      <ul className="">
        <div>
          <li className="h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-36 h-4 rounded bg-purple-100"></div>
            </div>
            <div>
              <div className="justify-self-end text-green-500 font-bold text-loading bg-purple-100 w-6 h-4 rounded"></div>
            </div>
          </li>
        </div>
      </ul>
    </div>
    <div className="flex flex-col col-span-8 overflow-y-auto"></div>
  </>
)

// In this component, empty/failure means the group filed to query.
// the GroupList component handles display if enrollmentsOfGroup is empty
export const Empty = () => <Redirect to={routes.teacherHome()} />
export const Failure = () => {
  return <Redirect to={routes.teacherHome()} />
}

export const Success = ({
  id,
  // enrollmentsOfGroup,
  behaviorsOfGroup,
  group,
  usersOfGroup
}) => {
  // const sorted = enrollmentsOfGroup?.slice().sort((a, b) => {
  //   const nameA = a?.user?.firstName?.toLowerCase()
  //   const nameB = b?.user?.firstName?.toLowerCase()
  //   return nameA < nameB ? -1 : 1
  // })
  return (
    <GroupList
      groupId={id}
      name={group?.name}
      enrollId={group?.enrollId}
      enrollmentsOfGroup={usersOfGroup}
      behaviorsOfGroup={behaviorsOfGroup}
    />
  )
}
