import { useAuth } from '@redwoodjs/auth'
import { usePageLoadingContext } from '@redwoodjs/router'

import NewGroupButton from 'src/components/NewGroupButton/NewGroupButton'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import PageLoader from 'src/components/PageLoader/PageLoader'
import TeacherHomeCell from 'src/components/TeacherHomeCell/TeacherHomeCell'

const TeacherHomePage = () => {
  const { currentUser } = useAuth()
  const { id, firstName } = currentUser
  const { loading } = usePageLoadingContext

  return (
    <DashboardLayout>
      {loading && <PageLoader />}
      <div className="p-4">
        <h1 className="text-3xl font-display mb-4">
          Welcome Back{currentUser ? `, ${firstName}` : null}! 👋
        </h1>
        <TeacherHomeCell userId={id} />
      </div>
      <NewGroupButton />
    </DashboardLayout>
  )
}

export default TeacherHomePage
