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
  const [selecting, setSelecting] = useState(false)
  const [selected, setSelected] = useState([])

  const [selectedStudents, setSelectedStudents] = useState([usersOfGroup[0]])
  const [isSelectingMultiple, setIsSelectingMultiple] = useState(false)

  useEffect(() => {
    setSelectedStudents([usersOfGroup[0]])
  }, [usersOfGroup])

  const handleSelect = async (userId) => {
    const studentLocation = usersOfGroup.findIndex((user) => user.id === userId)
    const clickedStudent =
      usersOfGroup[usersOfGroup.findIndex((user) => user.id === userId)]
    if (!isSelectingMultiple) {
      // sets the single user
      setSelectedStudents([clickedStudent])
    } else {
      // add/remove the user to the selected array if selecting multiples
      const isUserInSelected =
        selectedStudents.findIndex((user) => user.id === userId) !== -1
      if (isUserInSelected) {
        const removed = [...selectedStudents]
        const userLocation = await removed.findIndex(
          (user) => user.id === userId
        )
        removed.splice(userLocation, 1)
        setSelectedStudents(removed)
      } else {
        const added = [...selectedStudents, usersOfGroup[studentLocation]]
        setSelectedStudents(added)
      }
    }
  }

  const selectAll = () => {
    setSelectedStudents([...usersOfGroup])
  }

  if (usersOfGroup.length === 0) {
    return (
      <div className="col-span-full overflow-y-auto 2xl:col-span-5 p-1">
        No Students! Enroll new students with the code:{' '}
        <span className="font-bold font-mono">{enrollId}</span>
      </div>
    )
  }

  return (
    <>
      <div className="col-span-4 overflow-y-auto p-1">
        <button
          onClick={() => {
            setIsSelectingMultiple(!isSelectingMultiple)
            if (!isSelectingMultiple) {
              setSelectedStudents([])
            } else {
              setSelectedStudents([usersOfGroup[0]])
            }
          }}
          className={`${
            isSelectingMultiple ? 'button-purple' : 'button-white'
          } mr-4 w-42 mb-4`}
        >
          {isSelectingMultiple ? 'Cancel' : 'Select Multiple'}
        </button>
        {isSelectingMultiple && (
          <button
            onClick={() => {
              if (isSelectingMultiple) {
                selectAll()
              }
            }}
            className={`${
              isSelectingMultiple ? 'button-purple' : 'button-white'
            } mr-4 w-42 mb-4`}
          >
            {'Select All'}
          </button>
        )}
        {/* STUDENT LIST */}
        <ul className="">
          {usersOfGroup.map((enrollment) => {
            return (
              <div key={enrollment.id}>
                <ListViewStudentItem
                  id={enrollment.id}
                  key={enrollment.key}
                  user={enrollment}
                  selectedStudents={selectedStudents}
                  handleSelect={handleSelect}
                />
              </div>
            )
          })}
        </ul>
      </div>
      <div className="flex flex-col col-span-8 overflow-y-auto">
        {/* todo => just have the whole student passed as single prop */}
        {!isSelectingMultiple && (
          <StudentPointsCard user={selectedStudents[0]} />
        )}
        <AwardFeedbackCard
          groupId={groupId}
          userId={selectedStudents[0]?.id}
          firstName={selectedStudents[0]?.firstName}
          behaviorsOfGroup={behaviorsOfGroup}
          selecting={selecting}
          selected={selected}
          setSelecting={setSelecting}
          setSelected={setSelected}
          // setCurrentStudent={setCurrentStudent}
          studentId={selectedStudents[0]?.id}
          totalPoints={selectedStudents[0]?.points}
          userGroupPoints={selectedStudents[0]?.groupPoints[0].points}
        />
        {!isSelectingMultiple && (
          <RecentActivityListCard
            user={selectedStudents[0]}
            groupId={groupId}
            groupName={name}
          />
        )}
      </div>
    </>
  )
}

export default GroupList
