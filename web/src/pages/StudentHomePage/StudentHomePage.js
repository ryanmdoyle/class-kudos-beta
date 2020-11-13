import { Link, routes } from '@redwoodjs/router'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'

const StudentHomePage = () => {
  return (
    <DashboardLayout>
      <h1>StudentHomePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StudentHomePage/StudentHomePage.js</code>
      </p>
      <p>
        My default route is named <code>studentHome</code>, link to me with `
        <Link to={routes.studentHome()}>StudentHome</Link>`
      </p>
    </DashboardLayout>
  )
}

export default StudentHomePage
