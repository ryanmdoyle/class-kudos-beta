import { useState, useEffect } from 'react'

import ListViewStudentItem from 'src/components/ListViewStudentItem/ListViewStudentItem'
import StudentPointsCard from 'src/components/StudentPointsCard/StudentPointsCard'
import AwardFeedbackCard from 'src/components/AwardFeedbackCard/AwardFeedbackCard'
import RecentFeedbackListCard from 'src/components/RecentFeedbackListCard/RecentFeedbackListCard'
import FeedbackPointsCell from 'src/components/cells/FeedbackPointsCell/FeedbackPointsCell'

const GroupList = ({ groupId, enrollmentsOfGroup, behaviorsOfGroup }) => {
  const [student, setStudent] = useState(null)
  useEffect(() => {
    setStudent(enrollmentsOfGroup[0].user)
  }, [enrollmentsOfGroup])

  return (
    <>
      <ul className="col-span-4 overflow-scroll 2xl:col-span-5 p-1">
        {enrollmentsOfGroup.map((enrollment) => {
          return (
            <ListViewStudentItem
              key={enrollment.id}
              student={enrollment.user}
              onClick={() => {
                setStudent(enrollment.user)
              }}
            />
          )
        })}
      </ul>
      <div className="h-full flex flex-col col-span-8 2xl:col-span-3">
        <StudentPointsCard
          userId={student?.id}
          student={student}
          points={<FeedbackPointsCell userId={student?.id} />}
        />
        <AwardFeedbackCard
          groupId={groupId}
          student={student}
          behaviorsOfGroup={behaviorsOfGroup}
        />
        <RecentFeedbackListCard
          userId={student?.id}
          firstName={student?.firstName}
        />
      </div>
    </>
  )
}

export default GroupList
