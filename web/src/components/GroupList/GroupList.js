import { useState } from 'react'

import ListViewStudentItem from 'src/components/ListViewStudentItem/ListViewStudentItem'
import StudentPointsCard from 'src/components/StudentPointsCard/StudentPointsCard'
import AwardFeedbackCard from 'src/components/AwardFeedbackCard/AwardFeedbackCard'
import RecentFeedbackListCard from 'src/components/RecentFeedbackListCard/RecentFeedbackListCard'

const GroupList = ({
  groupId,
  enrollmentsOfGroup = [],
  behaviorsOfGroup = [],
}) => {
  const [student, setStudent] = useState(enrollmentsOfGroup[0]?.user)

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
      <div className="flex flex-col col-span-8 2xl:col-span-3 overflow-y-auto">
        <StudentPointsCard userId={student?.id} student={student} />
        <AwardFeedbackCard
          groupId={groupId}
          student={student}
          behaviorsOfGroup={behaviorsOfGroup}
        />
        <RecentFeedbackListCard
          userId={student?.id}
          firstName={student?.firstName}
          groupId={groupId}
        />
      </div>
    </>
  )
}

export default GroupList
