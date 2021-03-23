import { useAuth } from '@redwoodjs/auth'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import UserPointsWrapperCell from 'src/components/cells/UserPointsWrapperCell/UserPointsWrapperCell'

const StudentGroupPage = ({ groupId }) => {
  const { currentUser } = useAuth()
  return (
    <DashboardLayout>
      <UserPointsWrapperCell userId={currentUser?.id} groupId={groupId} />
    </DashboardLayout>
  )
}

export default StudentGroupPage
