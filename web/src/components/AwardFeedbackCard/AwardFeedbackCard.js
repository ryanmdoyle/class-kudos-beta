import BehaviorButtons from '../BehaviorButtons/BehaviorButtons'

const AwardFeedbackCard = ({ groupId, student, behaviorsOfGroup }) => {
  console.log('behaviorsOfGroup in award card', behaviorsOfGroup)
  return (
    <div className="white-box mb-4">
      <h2 className="font-display text-lg">
        Award Feedback{student?.firstName ? ` to ${student.firstName}` : null}
      </h2>
      <div className="h-full w-full flex flex-wrap justify-center content-start">
        <BehaviorButtons behaviors={behaviorsOfGroup} studentId={student?.id} />
      </div>
    </div>
  )
}

export default AwardFeedbackCard
