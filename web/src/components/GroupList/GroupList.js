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
  const [student, setStudent] = useState(enrollmentsOfGroup[0]?.user)

  // new state
  const [firstName, setFirstName] = useState(
    enrollmentsOfGroup[0]?.user.firstName
  )
  const [lastName, setLastName] = useState(enrollmentsOfGroup[0]?.user.lastName)
  const [totalPoints, setTotalPoints] = useState(null)

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
              {/* new */}
              <UserListItemCell
                userId={enrollment.user.id}
                firstName={enrollment.user.firstName}
                lastName={enrollment.user.lastName}
                groupId={groupId}
                userZero={enrollmentsOfGroup[0]?.user.id}
                setFirstName={setFirstName}
                setLastName={setLastName}
                totalEmpty={totalPoints === null}
                setTotalPoints={setTotalPoints}
              />
              {/* old */}
              <ListViewStudentItem
                key={enrollment.id}
                student={enrollment.user}
                onClick={() => {
                  setStudent(enrollment.user)
                }}
              />
            </>
          )
        })}
      </ul>
      <div className="flex flex-col col-span-8 2xl:col-span-3 overflow-y-auto">
        <StudentPointsCard
          userId={student?.id}
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
          userId={student?.id}
          firstName={student?.firstName}
          groupId={groupId}
          groupName={name}
        />
      </div>
    </>
  )
}

export default GroupList
