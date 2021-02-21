import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import GroupPointsCell from 'src/components/cells/GroupPointsCell/GroupPointsCell'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'

const StudentGroupPage = ({ groupId }) => {
  const { currentUser } = useAuth()
  return (
    <DashboardLayout>
      <div className="w-full h-full p-4">
        <h1>StudentGroupPage</h1>
        <GroupPointsCell groupId={groupId} userId={currentUser.id} />
        <p>
          Find me in{' '}
          <code>./web/src/pages/StudentGroupPage/StudentGroupPage.js</code>
        </p>
        <p>
          My default route is named <code>studentGroup</code>, link to me with `
          <Link to={routes.studentGroup()}>StudentGroup</Link>`
        </p>
      </div>
    </DashboardLayout>
  )
}

export default StudentGroupPage
