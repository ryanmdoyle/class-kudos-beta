import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'

const BehaviorButtons = ({ studentId, behaviors, groupId }) => {
  if (behaviors?.length === 0) {
    return (
      <p className="my-2 text-gray-500">
        No behaviors exists for this group! Create some in the options tab.
      </p>
    )
  }

  return (
    <>
      {behaviors?.map((behavior) => (
        <FeedbackButton
          name={behavior.name}
          value={behavior.value}
          studentId={studentId}
          behaviorId={behavior.id}
          groupId={groupId}
          key={behavior.id}
        />
      ))}
    </>
  )
}

export default BehaviorButtons
