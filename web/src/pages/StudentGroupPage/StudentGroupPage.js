import { Link, routes } from '@redwoodjs/router'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'

const StudentGroupPage = () => {
  return (
    <DashboardLayout>
      <h1>StudentGroupPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StudentGroupPage/StudentGroupPage.js</code>
      </p>
      <p>
        My default route is named <code>studentGroup</code>, link to me with `
        <Link to={routes.studentGroup()}>StudentGroup</Link>`
      </p>
    </DashboardLayout>
  )
}

export default StudentGroupPage
