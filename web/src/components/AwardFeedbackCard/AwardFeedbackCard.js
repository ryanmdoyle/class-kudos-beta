import BehaviorButtons from '../BehaviorButtons/BehaviorButtons'

const AwardFeedbackCard = ({
  groupId,
  userId,
  behaviorsOfGroup,
  firstName,
}) => {
  return (
    <div className="white-box mb-4">
      <h2 className="font-display text-lg">
        Award Feedback{firstName ? ` to ${firstName}` : null}
      </h2>
      <div className="w-full flex flex-wrap justify-center content-start">
        <BehaviorButtons
          behaviors={behaviorsOfGroup}
          userId={userId}
          groupId={groupId}
        />
      </div>
    </div>
  )
}

export default AwardFeedbackCard
