import BehaviorButtons from '../BehaviorButtons/BehaviorButtons'

const AwardFeedbackCard = ({
  selectedStudents,
  setSelectedStudents,
  groupId,
  behaviorsOfGroup,
  isSelectingMultiple,
  setIsSelectingMultiple,
}) => {
  return (
    <div className="white-box mb-4">
      <h2 className="font-display text-lg">
        {isSelectingMultiple && 'Award Feedback to Multiple Students'}
        {!isSelectingMultiple &&
          `Award Feedback ${
            selectedStudents[0]?.firstName
              ? `to ${selectedStudents[0]?.firstName}`
              : ''
          }`}
      </h2>
      <div className="w-full flex flex-wrap justify-center content-start">
        <BehaviorButtons
          behaviors={behaviorsOfGroup}
          selectedStudents={selectedStudents}
          setSelectedStudents={setSelectedStudents}
          isSelectingMultiple={isSelectingMultiple}
          setIsSelectingMultiple={setIsSelectingMultiple}
          groupId={groupId}
        />
      </div>
    </div>
  )
}

export default AwardFeedbackCard
