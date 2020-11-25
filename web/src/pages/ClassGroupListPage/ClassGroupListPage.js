// import { Link, routes } from '@redwoodjs/router'
import ListViewStudentItem from 'src/components/ListViewStudentItem/ListViewStudentItem'
import SubNav from 'src/components/SubNav/SubNav'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'

const ClassGroupListPage = () => {
  return (
    <DashboardLayout>
      <SubNav />
      <div className="w-full h-sub-full p-4 grid grid-cols-12 gap-4">
        <div className="col-span-4 overflow-scroll p-1">
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
          <ListViewStudentItem />
        </div>
        <div className="h-full flex flex-col col-span-5">
          <h1 className="text-3xl font-display mb-4">Student Name</h1>
          <div className="h-48 bg-white rounded-md shadow p-4 mb-4 flex flex-col">
            <h2 className="font-display text-lg">Points</h2>
            <div className="w-full h-full flex justify-end">
              <span className="font-display text-9xl text-green-500 mr-8">
                98
              </span>
              <div>
                <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center mb-4">
                  <span className="text-white text-4xl">+</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-red-500 flex justify-center items-center">
                  <span className="text-white text-4xl">-</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-md shadow p-4">
            <h2 className="font-display text-lg">Award Feedback</h2>
          </div>
        </div>
        <div className="bg-white rounded-md shadow p-4 col-span-3">
          <h2 className="font-display text-lg">Recent Feedback</h2>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ClassGroupListPage
