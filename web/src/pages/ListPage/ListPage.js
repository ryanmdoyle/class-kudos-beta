// import { Link, routes } from '@redwoodjs/router'
import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'
import ListViewStudentItem from 'src/components/ListViewStudentItem/ListViewStudentItem'
import SubNav from 'src/components/SubNav/SubNav'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import ListViewRecentItem from '../../components/ListViewRecentItem/ListViewRecentItem'
import GroupListCell from 'src/components/cells/GroupListCell'

const ListPage = ({ groupId }) => {
  return (
    <DashboardLayout>
      <SubNav />
      <GroupListCell id={groupId} />
      {groupId}
      <div className="w-full h-sub-full p-4 grid grid-cols-12 gap-4">
        <ul className="col-span-4 overflow-scroll p-1 2xl:col-span-5">
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
        </ul>
        <div className="h-full flex flex-col col-span-4 2xl:col-span-3">
          <h1 className="text-3xl font-display mb-4">Student Name</h1>
          <div className="h-48 white-box mb-4 flex flex-col">
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
          <div className="white-box">
            <h2 className="font-display text-lg">Award Feedback</h2>
            <div className="h-full w-full flex flex-wrap justify-evenly content-start">
              <FeedbackButton />
              <FeedbackButton />
              <FeedbackButton />
              <FeedbackButton />
              <FeedbackButton />
              <FeedbackButton />
              <FeedbackButton />
              <FeedbackButton />
            </div>
          </div>
        </div>
        <div className="mt-12 col-span-4 2xl:col-span-4 flex flex-col">
          <div className="white-box">
            <h2 className="font-display text-lg mb-2">
              Recent Feedback for _______
            </h2>
            <ul>
              <ListViewRecentItem />
              <ListViewRecentItem />
              <ListViewRecentItem />
              <ListViewRecentItem />
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ListPage
