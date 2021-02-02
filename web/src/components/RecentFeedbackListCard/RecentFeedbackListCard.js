import UserFeedbackOfGroupCell from 'src/components/cells/UserFeedbackOfGroupCell/UserFeedbackOfGroupCell'

const RecentFeedbackListCard = ({ userId, firstName, groupId }) => {
  return (
    <div className="white-box mb-4 overflow-scroll">
      <h2 className="font-display text-lg mb-2">
        Recent Feedback for {firstName}
      </h2>
      <UserFeedbackOfGroupCell userId={userId} groupId={groupId} />
    </div>
  )
}

export default RecentFeedbackListCard
