import { useState } from 'react'

// import { Link, routes } from '@redwoodjs/router'
import SubNav from 'src/components/SubNav/SubNav'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import GroupStudentListCell from 'src/components/cells/GroupStudentListCell/GroupStudentListCell'
import StudentPointsCard from 'src/components/StudentPointsCard/StudentPointsCard'
import AwardFeedbackCard from 'src/components/AwardFeedbackCard/AwardFeedbackCard'
import RecentFeedbackListCard from 'src/components/RecentFeedbackListCard/RecentFeedbackListCard'

const ListPage = ({ groupId }) => {
  const [currentEnrollee, setEnrollee] = useState(null)
  return (
    <DashboardLayout>
      <SubNav />
      <div className="w-full h-sub-full p-4 grid grid-cols-12 gap-4">
        <GroupStudentListCell
          id={groupId}
          currentEnrollee={currentEnrollee}
          setEnrollee={setEnrollee}
        />

        {/* <div className="h-full flex flex-col col-span-8 2xl:col-span-3">
          {currentEnrollee && (
            <>
              <StudentPointsCard
                userId={currentEnrollee.id}
                name={`${currentEnrollee.firstName} ${currentEnrollee.lastName}`}
                points={5}
              />

              <AwardFeedbackCard />

              <RecentFeedbackListCard />
            </>
          )}
        </div> */}
      </div>
    </DashboardLayout>
  )
}

export default ListPage
