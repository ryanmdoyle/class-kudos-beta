import { useAuth } from '@redwoodjs/auth'

import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import StudentHomeCell from 'src/components/cells/StudentHomeCell/StudentHomeCell'
import NewEnrollmentButton from 'src/components/NewEnrollmentButton/NewEnrollmentButton'
import UserPointsCell from 'src/components/cells/UserPointsCell/UserPointsCell'

const StudentHomePage = () => {
  const { currentUser } = useAuth()
  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-3xl font-display mb-4">
          Welcome{currentUser ? `, ${currentUser?.firstName}` : null}! 👋
        </h1>
        <div className="white-box w-full h-32 mb-4 flex">
          <span className="text-8xl text-green-400">
            <UserPointsCell userId={currentUser?.id} />
          </span>
          <span className="text-lg ml-2 text-gray-500 self-end">
            total kudos
          </span>
        </div>
        <StudentHomeCell userId={currentUser?.id} />
      </div>
      <NewEnrollmentButton userId={currentUser?.id} />
    </DashboardLayout>
  )
}

export default StudentHomePage
