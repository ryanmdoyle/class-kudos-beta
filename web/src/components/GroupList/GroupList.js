import { useState, useEffect, useCallback } from 'react'

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
  const [selectedStudents, setSelectedStudents] = useState([usersOfGroup[0]])
  const [isSelectingMultiple, setIsSelectingMultiple] = useState(false)

  useEffect(() => {
    // checks for diffs in usersOfGroup after awading points.
    // todo -> look into refs for more efficiency
    if (selectedStudents.length === 1) {
      const usersOfGroupLocation = usersOfGroup.findIndex(
        (user) => user.id === selectedStudents[0]?.id
      )
      if (
        selectedStudents[0]?.points !==
        usersOfGroup[usersOfGroupLocation].points
      ) {
        handleSelect(selectedStudents[0].id) // forces refreash of state for StudentPointsCard
      }
    }
  }, [usersOfGroup, selectedStudents, handleSelect])

  const handleSelect = useCallback(
    (userId) => {
      if (!isSelectingMultiple) {
        // sets the single user
        const clickedStudent =
          usersOfGroup[usersOfGroup.findIndex((user) => user.id === userId)]
        setSelectedStudents([clickedStudent])
      } else {
        // sets multiple selections
        const isUserInSelected =
          selectedStudents.findIndex((user) => user.id === userId) !== -1
        if (isUserInSelected) {
          // remove selected if present
          const removed = [...selectedStudents]
          const userLocation = removed.findIndex((user) => user.id === userId)
          removed.splice(userLocation, 1)
          setSelectedStudents(removed)
        } else {
          // add user to selection
          const studentLocation = usersOfGroup.findIndex(
            (user) => user.id === userId
          )
          const added = [...selectedStudents, usersOfGroup[studentLocation]]
          setSelectedStudents(added)
        }
      }
    },
    [isSelectingMultiple, selectedStudents, usersOfGroup]
  )

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
          {usersOfGroup.map((user) => {
            return (
              <div key={user.id}>
                <ListViewStudentItem
                  id={user.id}
                  key={user.key}
                  user={user}
                  groupId={groupId}
                  selectedStudents={selectedStudents}
                  handleSelect={handleSelect}
                />
              </div>
            )
          })}
        </ul>
      </div>
      <div className="flex flex-col col-span-8 overflow-y-auto">
        {!isSelectingMultiple && selectedStudents.length > 0 && (
          <StudentPointsCard
            user={selectedStudents[0]}
            selectedStudents={selectedStudents}
            groupId={groupId}
          />
        )}
        <AwardFeedbackCard
          selectedStudents={selectedStudents}
          setSelectedStudents={setSelectedStudents}
          groupId={groupId}
          behaviorsOfGroup={behaviorsOfGroup}
          isSelectingMultiple={isSelectingMultiple}
          setIsSelectingMultiple={setIsSelectingMultiple}
        />
        {!isSelectingMultiple && selectedStudents.length > 0 && (
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
