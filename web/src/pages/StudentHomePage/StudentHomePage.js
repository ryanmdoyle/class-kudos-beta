import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import StudentHomeCell from 'src/components/cells/StudentHomeCell/StudentHomeCell'

const StudentHomePage = () => {
  const { currentUser } = useAuth()
  const { id, firstName } = currentUser
  console.log('STUDENT', currentUser)
  return (
    <DashboardLayout>
      <h1>Hello, {firstName}, StudentHomePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StudentHomePage/StudentHomePage.js</code>
      </p>
      <p>
        My default route is named <code>studentHome</code>, link to me with `
        <Link to={routes.studentHome()}>StudentHome</Link>`
      </p>
      <StudentHomeCell userId={id} />
    </DashboardLayout>
  )
}

export default StudentHomePage
