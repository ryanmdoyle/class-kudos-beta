import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'

const BehaviorButtons = ({ studentId, behaviors, groupId }) => {
  return behaviors.map((behavior) => (
    <FeedbackButton
      name={behavior.name}
      studentId={studentId}
      behaviorId={behavior.id}
      groupId={groupId}
      key={behavior.id}
    />
  ))
}

export default BehaviorButtons
