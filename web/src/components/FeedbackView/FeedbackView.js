import GroupFeedbackCell from 'src/components/cells/GroupFeedbackCell/GroupFeedbackCell'

const FeedbackView = ({ groupId }) => {
  return (
    <div className="p-4">
      <h1 className="font-display text-2xl mb-4">Recent Group Feedback</h1>
      <GroupFeedbackCell groupId={groupId} />
    </div>
  )
}

export default FeedbackView
