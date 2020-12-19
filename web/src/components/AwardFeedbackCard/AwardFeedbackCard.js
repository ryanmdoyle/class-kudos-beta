import BehaviorButtonsCell from 'src/components/cells/BehaviorsButtonsCell/BehaviorsButtonsCell'

const AwardFeedbackCard = ({ groupId, student }) => {
  return (
    <div className="white-box mb-4">
      <h2 className="font-display text-lg">
        Award Feedback{student?.firstName ? ` to ${student.firstName}` : null}
      </h2>
      <div className="h-full w-full flex flex-wrap justify-center content-start">
        <BehaviorButtonsCell groupId={groupId} studentId={student?.id} />
      </div>
    </div>
  )
}

export default AwardFeedbackCard
