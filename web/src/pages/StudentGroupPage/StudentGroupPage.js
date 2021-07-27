import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import StudentGroupPageCell from 'src/components/cells/StudentGroupPageCell/StudentGroupPageCell'

const StudentGroupPage = ({ groupId }) => {
  const { currentUser } = useAuth()
  return (
    <DashboardLayout>
      <StudentGroupPageCell userId={currentUser?.id} groupId={groupId} />
    </DashboardLayout>
  )
}

export default StudentGroupPage
