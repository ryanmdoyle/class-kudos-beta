import { Link, routes } from '@redwoodjs/router'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'

const TeacherHomePage = () => {
  return (
    <DashboardLayout>
      <h1>TeacherHomePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TeacherHomePage/TeacherHomePage.js</code>
      </p>
      <p>
        My default route is named <code>teacherHome</code>, link to me with `
        <Link to={routes.teacherHome()}>TeacherHome</Link>`
      </p>
    </DashboardLayout>
  )
}

export default TeacherHomePage
