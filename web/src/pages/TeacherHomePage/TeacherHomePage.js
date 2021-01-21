import { useAuth } from '@redwoodjs/auth'
import { usePageLoadingContext } from '@redwoodjs/router'

import GroupCardCell from 'src/components/cells/GroupCardCell/GroupCardCell'
import NewGroupButton from 'src/components/NewGroupButton/NewGroupButton'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import PageLoader from 'src/components/PageLoader/PageLoader'

const TeacherHomePage = () => {
  const { currentUser } = useAuth()
  const { firstName } = currentUser
  const { loading } = usePageLoadingContext

  return (
    <DashboardLayout>
      {loading && <PageLoader />}
      <div className="p-4">
        <h1 className="text-3xl font-display mb-4">
          Welcome Back{currentUser ? `, ${firstName}` : null}! 👋
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div id="classes" className="w-100 lg:w-1/2 pr-2">
            <h1 className="text-2xl font-display mb-4">Classes</h1>
            <GroupCardCell groupType="primary" userId={currentUser.id} />
          </div>
          <div id="groups" className="w-100 lg:w-1/2 pl-2">
            <h1 className="text-2xl font-display mb-4">Groups</h1>
            <GroupCardCell groupType="secondary" userId={currentUser.id} />
          </div>
        </div>
      </div>
      <NewGroupButton />
    </DashboardLayout>
  )
}

export default TeacherHomePage
