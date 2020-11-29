// import { Link, routes } from '@redwoodjs/router'
import ClassGroupItem from 'src/components/ClassGroupItem/ClassGroupItem'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import PrimaryGroupsOwnedCell from 'src/components/PrimaryGroupsOwnedCell'

const TeacherHomePage = () => {
  return (
    <DashboardLayout>
      <div className="p-4">
        <div className="flex flex-col lg:flex-row">
          <div id="classes" className="w-100 lg:w-1/2 pr-2">
            <h1 className="text-3xl font-display mb-4">Classes</h1>
            <PrimaryGroupsOwnedCell />
            <ClassGroupItem />
            <ClassGroupItem />
            <ClassGroupItem />
            <ClassGroupItem />
          </div>
          <div id="groups" className="w-100 lg:w-1/2 pl-2">
            <h1 className="text-3xl font-display mb-4">Groups</h1>
            <ClassGroupItem />
            <ClassGroupItem />
            <ClassGroupItem />
            <ClassGroupItem />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TeacherHomePage
