import { useAuth } from '@redwoodjs/auth'

import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import StudentHomeCell from 'src/components/cells/StudentHomeCell/StudentHomeCell'
import NewEnrollmentButton from 'src/components/NewEnrollmentButton/NewEnrollmentButton'

const StudentHomePage = () => {
  const { currentUser } = useAuth()
  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-3xl font-display mb-4">
          Welcome Back{currentUser ? `, ${currentUser?.firstName}` : null}! 👋
        </h1>
        <StudentHomeCell userId={currentUser?.id} />
      </div>
      <NewEnrollmentButton userId={currentUser?.id} />
    </DashboardLayout>
  )
}

export default StudentHomePage
