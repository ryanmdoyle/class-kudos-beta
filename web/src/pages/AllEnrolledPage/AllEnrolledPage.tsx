import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import AllEnrolledCell from 'src/components/cells/AllEnrolledCell'

const AllEnrolledPage = () => {
  const { currentUser } = useAuth()
  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-display mb-2">All Enrolled Students</h1>
        <AllEnrolledCell userId={currentUser.id} />
      </div>
    </DashboardLayout>
  )
}

export default AllEnrolledPage
