import { useState } from 'react'

import StudentPointsCard from 'src/components/StudentPointsCard/StudentPointsCard'
import AwardFeedbackCard from 'src/components/AwardFeedbackCard/AwardFeedbackCard'
import RecentActivityListCard from 'src/components/RecentActivityListCard/RecentActivityListCard'
import UserListItemCell from 'src/components/cells/UserListItemCell/UserListItemCell'

const GroupList = ({
  groupId,
  name,
  enrollId,
  enrollmentsOfGroup = [],
  behaviorsOfGroup = [],
}) => {
  const [selecting, setSelecting] = useState(false)
  const [selected, setSelected] = useState([])

  const [firstName, setFirstName] = useState(
    enrollmentsOfGroup[0]?.user.firstName
  )
  const [lastName, setLastName] = useState(enrollmentsOfGroup[0]?.user.lastName)
  const [studentId, setStudentId] = useState(enrollmentsOfGroup[0]?.user.id)
  const [totalPoints, setTotalPoints] = useState(null)

  const handleSelect = (userId) => {
    if (selecting) {
      if (selected.includes(userId)) {
        const removed = [...selected]
        const userLocation = removed.indexOf(userId)
        removed.splice(userLocation, 1)
        setSelected(removed)
      } else {
        const added = [...selected, userId]
        setSelected(added)
      }
    }
  }

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
      <div className="col-span-4 overflow-scroll p-1">
        <button
          onClick={() => {
            setSelecting(!selecting)
          }}
          className={`${
            selecting ? 'button-purple' : 'button-white'
          } mr-4 w-52 mb-4`}
        >
          {selecting ? 'Cancel' : 'Select Multiple'}
        </button>
        {selecting && <button className="button-green shadow-xl">Award</button>}
        <ul className="">
          {enrollmentsOfGroup.map((enrollment) => {
            const userSelected = selected.includes(enrollment.user.id)
            return (
              <div
                key={enrollment.user.id}
                className={`${
                  userSelected && selecting && 'ring-2'
                } ring-purple-500 rounded-md`}
              >
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
                  handleSelect={handleSelect}
                />
              </div>
            )
          })}
        </ul>
      </div>
      <div className="flex flex-col col-span-8 overflow-y-auto">
        {!selecting && (
          <StudentPointsCard
            firstName={firstName}
            lastName={lastName}
            totalPoints={totalPoints}
          />
        )}
        <AwardFeedbackCard
          groupId={groupId}
          userId={studentId}
          firstName={firstName}
          behaviorsOfGroup={behaviorsOfGroup}
          selecting={selecting}
          selected={selected}
          setSelecting={setSelecting}
          setSelected={setSelected}
        />
        {!selecting && (
          <RecentActivityListCard
            userId={studentId}
            firstName={firstName}
            groupId={groupId}
            groupName={name}
          />
        )}
      </div>
    </>
  )
}

export default GroupList
