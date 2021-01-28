import { useAuth } from '@redwoodjs/auth'

import GroupsOwnedCell from '../cells/GroupsOwnedCell/GroupsOwnedCell'

const TeacherNav = () => {
  const { currentUser } = useAuth()
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <GroupsOwnedCell userId={currentUser?.id} />
    </div>
  )
}

export default TeacherNav
