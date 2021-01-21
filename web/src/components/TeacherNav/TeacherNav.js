import { useAuth } from '@redwoodjs/auth'

import GroupsOwnedCell from '../cells/GroupsOwnedCell/GroupsOwnedCell'

const TeacherNav = () => {
  const { currentUser } = useAuth()
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <span className="text-lg font-display mb-2">Classes</span>
      <GroupsOwnedCell groupType="primary" userId={currentUser.id} />
      <span className="text-lg font-display mb-2 mt-2">Groups</span>
      <GroupsOwnedCell groupType="secondary" userId={currentUser.id} />
    </div>
  )
}

export default TeacherNav
