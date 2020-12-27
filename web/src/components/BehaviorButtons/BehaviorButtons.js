import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'

const BehaviorButtons = ({ studentId, behaviors }) => {
  return behaviors.map((behavior) => (
    <FeedbackButton
      name={behavior.name}
      studentId={studentId}
      behaviorId={behavior.id}
      key={behavior.id}
    />
  ))
}

export default BehaviorButtons
