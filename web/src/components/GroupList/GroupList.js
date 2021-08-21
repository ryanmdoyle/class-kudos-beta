import { useState, useEffect } from 'react'

import StudentPointsCard from 'src/components/StudentPointsCard/StudentPointsCard'
import AwardFeedbackCard from 'src/components/AwardFeedbackCard/AwardFeedbackCard'
import RecentActivityListCard from 'src/components/RecentActivityListCard/RecentActivityListCard'
import ListViewStudentItem from '../ListViewStudentItem/ListViewStudentItem'

const GroupList = ({
  groupId,
  name,
  enrollId,
  usersOfGroup = [],
  behaviorsOfGroup = [],
}) => {
  const [currentStudent, setCurrentStudent] = useState(
    usersOfGroup[0]?.id
  )
  const [selecting, setSelecting] = useState(false)
  const [selected, setSelected] = useState([])
  const [firstName, setFirstName] = useState(
    usersOfGroup[0]?.firstName
  )
  const [lastName, setLastName] = useState(usersOfGroup[0]?.lastName)
  const [studentId, setStudentId] = useState(usersOfGroup[0]?.id)
  const [totalPoints, setTotalPoints] = useState(null)
  const [userGroupPoints, setUserGroupPoints] = useState(null)
  const [userZeroPoints, setUserZeroPoints] = useState(null)
  const [userZeroGroupPoints, setUserZeroGroupPoints] = useState(null)

  useEffect(() => {
    setFirstName(usersOfGroup[0]?.firstName)
    setLastName(usersOfGroup[0]?.lastName)
    setStudentId(usersOfGroup[0]?.id)
  }, [groupId])

  const handleSelect = (userId) => {
    setCurrentStudent(userId)
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

  const selectAll = () => {
    const allUsers = usersOfGroup.map(user => user.id)
    setSelected(allUsers)
  }

  if (usersOfGroup.length === 0) {
    return (
      <div className="col-span-full overflow-scroll 2xl:col-span-5 p-1">
        No Students! Enroll new students with the code:{' '}
        <span className="font-bold font-mono">{enrollId}</span>
      </div>
    )
  }

  return (
    <>
      <div className="col-span-4 overflow-scroll p-1">
        <button
          onClick={() => {
            setSelecting(!selecting)
            setSelected([])
            if (!selecting) {
              setCurrentStudent(null)
            } else setCurrentStudent(studentId)
          }}
          className={`${
            selecting ? 'button-purple' : 'button-white'
          } mr-4 w-42 mb-4`}
        >
          {selecting ? 'Cancel' : 'Select Multiple'}
        </button>
        { selecting && (
          <button
          onClick={() => {
            if (selecting) {
              selectAll()
            }
          }}
          className={`${
            selecting ? 'button-purple' : 'button-white'
          } mr-4 w-42 mb-4`}
        >
          {'Select All'}
        </button>
        )}
        {/* STUDENT LIST */}
        <ul className="">
          {usersOfGroup.map((enrollment) => {
            const userSelected = selected.includes(enrollment.id)
            return (
              <div
                key={enrollment.id}
                className={`${
                  userSelected && selecting && 'ring-2'
                } ring-purple-500 rounded-md`}
              >
                <ListViewStudentItem
                  id={enrollment.id}
                  key={enrollment.key}
                  user={enrollment}
                  groupId={groupId}
                  currentStudent={currentStudent}
                  selecting={selecting}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setStudentId={setStudentId}
                  handleSelect={handleSelect}
                  setTotalPoints={setTotalPoints}
                  setUserGroupPoints={setUserGroupPoints}
                  userZero={usersOfGroup[0]?.id}
                  setUserZeroPoints={setUserZeroPoints}
                  setUserZeroGroupPoints={setUserZeroGroupPoints}
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
            userId={studentId}
            groupId={groupId}
            totalPoints={
              studentId === usersOfGroup[0]?.id
                ? userZeroPoints
                : totalPoints
            }
            userGroupPoints={
              studentId === usersOfGroup[0]?.id
                ? userZeroGroupPoints
                : userGroupPoints
            }
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
          setCurrentStudent={setCurrentStudent}
          studentId={studentId}
          totalPoints={
              studentId === usersOfGroup[0]?.id
                ? userZeroPoints
                : totalPoints
            }
            userGroupPoints={
              studentId === usersOfGroup[0]?.id
                ? userZeroGroupPoints
                : userGroupPoints
            }
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
