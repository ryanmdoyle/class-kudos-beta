import { useState } from 'react'

import ListViewStudentItem from 'src/components/ListViewStudentItem/ListViewStudentItem'
import StudentPointsCard from 'src/components/StudentPointsCard/StudentPointsCard'
import AwardFeedbackCard from 'src/components/AwardFeedbackCard/AwardFeedbackCard'
import RecentFeedbackListCard from 'src/components/RecentFeedbackListCard/RecentFeedbackListCard'
import UserListItemCell from 'src/components/cells/UserListItemCell/UserListItemCell'

const GroupList = ({
  groupId,
  name,
  enrollId,
  enrollmentsOfGroup = [],
  behaviorsOfGroup = [],
}) => {
  const student = null
  const [firstName, setFirstName] = useState(
    enrollmentsOfGroup[0]?.user.firstName
  )
  const [lastName, setLastName] = useState(enrollmentsOfGroup[0]?.user.lastName)
  const [totalPoints, setTotalPoints] = useState(null)
  const [studentId, setStudentId] = useState(enrollmentsOfGroup[0]?.user.id)

  if (enrollmentsOfGroup.length === 0) {
    return (
      <div className="col-span-full overflow-scroll 2xl:col-span-5 p-1">
        No Students! Enroll new students with the code:{' '}
        <span className="font-bold">{enrollId}</span>
      </div>
    )
  }

  return (
    <>
      <ul className="col-span-4 overflow-scroll 2xl:col-span-5 p-1">
        {enrollmentsOfGroup.map((enrollment) => {
          return (
            <>
              <UserListItemCell
                userId={enrollment.user.id}
                firstName={enrollment.user.firstName}
                lastName={enrollment.user.lastName}
                groupId={groupId}
                userZero={enrollmentsOfGroup[0]?.user.id}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setStudentId={setStudentId}
                totalEmpty={totalPoints === null}
                setTotalPoints={setTotalPoints}
              />
            </>
          )
        })}
      </ul>
      <div className="flex flex-col col-span-8 2xl:col-span-3 overflow-y-auto">
        <StudentPointsCard
          userId={studentId}
          student={student}
          firstName={firstName}
          lastName={lastName}
          totalPoints={totalPoints}
        />
        <AwardFeedbackCard
          groupId={groupId}
          student={student}
          behaviorsOfGroup={behaviorsOfGroup}
        />
        <RecentFeedbackListCard
          userId={studentId}
          firstName={firstName}
          groupId={groupId}
          groupName={name}
        />
      </div>
    </>
  )
}

export default GroupList
