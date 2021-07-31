import BehaviorButtons from '../BehaviorButtons/BehaviorButtons'

const AwardFeedbackCard = ({
  groupId,
  userId,
  behaviorsOfGroup,
  firstName,
  selecting,
  selected,
  setSelecting,
  setSelected,
  totalPoints,
  userGroupPoints,
  setCurrentStudent,
  studentId,
}) => {
  return (
    <div className="white-box mb-4">
      <h2 className="font-display text-lg">
        {selecting && 'Award Feedback to Multiple Students'}
        {!selecting && `Award Feedback ${firstName ? `to ${firstName}` : null}`}
      </h2>
      <div className="w-full flex flex-wrap justify-center content-start">
        <BehaviorButtons
          behaviors={behaviorsOfGroup}
          userId={userId}
          groupId={groupId}
          selecting={selecting}
          selected={selected}
          setSelecting={setSelecting}
          setSelected={setSelected}
          totalPoints={totalPoints}
          userGroupPoints={userGroupPoints}
          setCurrentStudent={setCurrentStudent}
          studentId={studentId}
        />
      </div>
    </div>
  )
}

export default AwardFeedbackCard
