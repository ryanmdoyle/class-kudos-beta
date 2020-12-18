import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import GroupCardCell from 'src/components/cells/GroupCardCell/GroupCardCell'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'

const TeacherHomePage = () => {
  const { currentUser } = useAuth()
  const { firstName } = currentUser
  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-3xl font-display mb-4">
          Welcome Back{currentUser ? `, ${firstName}` : null}! 👋
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div id="classes" className="w-100 lg:w-1/2 pr-2">
            <h1 className="text-2xl font-display mb-4">Classes</h1>
            <GroupCardCell groupType="primary" />
          </div>
          <div id="groups" className="w-100 lg:w-1/2 pl-2">
            <h1 className="text-2xl font-display mb-4">Groups</h1>
            <GroupCardCell groupType="secondary" />
          </div>
        </div>
      </div>
      <Link to={routes.scaffoldsNewGroup()}>
        <button className="button-green absolute top-5 right-5">
          Create New
        </button>
      </Link>
    </DashboardLayout>
  )
}

export default TeacherHomePage
