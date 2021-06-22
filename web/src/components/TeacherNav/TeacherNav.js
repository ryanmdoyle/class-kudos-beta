import { useAuth } from '@redwoodjs/auth'

import TeacherHomeButton from 'src/components/TeacherHomeButton/TeacherHomeButton'
import GroupsOwnedCell from '../cells/GroupsOwnedCell/GroupsOwnedCell'

import { NavLink, routes } from '@redwoodjs/router'

const TeacherNav = () => {
  const { currentUser } = useAuth()
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <TeacherHomeButton />
      <GroupsOwnedCell userId={currentUser?.id} />
      <NavLink
        to={routes.allEnrolled()}
        className="w-full inline-block text-normal font-display px-4 py-2 text-center rounded-md hover:bg-purple-100"
        activeClassName="bg-purple-100"
      >
        View All Students
      </NavLink>
    </div>
  )
}

export default TeacherNav
