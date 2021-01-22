import { useAuth } from '@redwoodjs/auth'

import EnrolledNavCell from 'src/components/cells/EnrolledNavCell/EnrolledNavCell'

const StudentNav = () => {
  const { currentUser } = useAuth()
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <EnrolledNavCell groupType="primary" userId={currentUser.id} />
      <EnrolledNavCell groupType="secondary" userId={currentUser.id} />
    </div>
  )
}

export default StudentNav
