import { useAuth } from '@redwoodjs/auth'

import EnrolledNavCell from 'src/components/cells/EnrolledNavCell/EnrolledNavCell'

const StudentNav = () => {
  const { currentUser } = useAuth()
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <span className="text-lg font-display mb-2">Classes</span>
      <EnrolledNavCell groupType="primary" userId={currentUser.id} />
      <span className="text-lg font-display mb-2 mt-2">Groups</span>
      <EnrolledNavCell groupType="secondary" userId={currentUser.id} />
    </div>
  )
}

export default StudentNav
