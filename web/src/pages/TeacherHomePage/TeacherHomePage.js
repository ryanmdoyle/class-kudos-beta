import { useAuth } from '@redwoodjs/auth'
import { usePageLoadingContext } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NewGroupButton from 'src/components/NewGroupButton/NewGroupButton'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import PageLoader from 'src/components/PageLoader/PageLoader'
import TeacherHomeCell from 'src/components/cells/TeacherHomeCell/TeacherHomeCell'

const TeacherHomePage = () => {
  const { currentUser } = useAuth()
  const { loading } = usePageLoadingContext

  return (
    <DashboardLayout>
      <MetaTags
        title="Class Kudos - Teacher Home"
        description="Teacher Home Page"
      />
      {loading && <PageLoader />}
      <div className="p-4">
        <h1 className="text-3xl font-display mb-4">
          Welcome{currentUser ? `, ${currentUser?.firstName}` : null}! 👋
        </h1>
        <TeacherHomeCell userId={currentUser?.id} />
      </div>
      <NewGroupButton />
    </DashboardLayout>
  )
}

export default TeacherHomePage
