import { Link, routes } from '@redwoodjs/router'

import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import StudentCell from 'src/components/cells/StudentCell'

const StudentPage = ({ userId }) => {
  return (
    <DashboardLayout>
      <div className="p-4">
        <StudentCell userId={userId} />
      </div>
    </DashboardLayout>
  )
}

export default StudentPage
