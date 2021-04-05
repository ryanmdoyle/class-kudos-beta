import RedeemedOfGroupReviewedCell from 'src/components/cells/RedeemedOfGroupReviewedCell/RedeemedOfGroupReviewedCell'
import RedeemedOfGroupToReviewCell from 'src/components/cells/RedeemedOfGroupToReviewCell/RedeemedOfGroupToReviewCell'

const RedeemedView = ({ groupId }) => {
  return (
    <div className="p-4 h-sub-full overflow-hidden">
      <h1 className="font-display text-2xl mb-4">
        Redeemed Kudos Awaiting Review
      </h1>
      <RedeemedOfGroupToReviewCell groupId={groupId} />
      <h1 className="font-display text-2xl mb-4">Previously Reviewed</h1>
      <RedeemedOfGroupReviewedCell groupId={groupId} />
    </div>
  )
}

export default RedeemedView
