import { useAuth } from '@redwoodjs/auth'

import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import EditUserCell from 'src/components/cells/EditUserCell/EditUserCell'

const ProfilePage = () => {
  const { currentUser } = useAuth()
  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-3xl font-display mb-4">
          Welcome{currentUser ? `, ${currentUser?.firstName}` : null}! 👋
        </h1>
        <EditUserCell id={currentUser?.id} />
      </div>
    </DashboardLayout>
  )
}

export default ProfilePage
