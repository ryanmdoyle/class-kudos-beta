import { useAuth } from '@redwoodjs/auth'

import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import StudentHomeCell from 'src/components/cells/StudentHomeCell/StudentHomeCell'
import NewEnrollmentButton from 'src/components/NewEnrollmentButton/NewEnrollmentButton'

const StudentHomePage = () => {
  const { currentUser } = useAuth()
  const { id, firstName } = currentUser
  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-3xl font-display mb-4">
          Welcome Back{currentUser ? `, ${firstName}` : null}! 👋
        </h1>
        <StudentHomeCell userId={id} />
      </div>
      <NewEnrollmentButton userId={id} />
    </DashboardLayout>
  )
}

export default StudentHomePage
