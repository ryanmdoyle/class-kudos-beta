import RedeemedOfGroupReviewedCell from 'src/components/cells/RedeemedOfGroupReviewedCell/RedeemedOfGroupReviewedCell'
import RedeemedOfGroupToReviewCell from 'src/components/cells/RedeemedOfGroupToReviewCell/RedeemedOfGroupToReviewCell'

import { MetaTags } from '@redwoodjs/web'

const RedeemedView = ({ groupId }) => {
  return (
    <>
      <MetaTags
        title={`Class Kudos - Feedback`}
        description={`Feedback Page`}
      />
      <div className="p-4 h-sub-full overflow-y-scroll">
        <h1 className="font-display text-2xl mb-4">Awards Awaiting Approval</h1>
        <RedeemedOfGroupToReviewCell groupId={groupId} />
        <h1 className="font-display text-2xl my-4">
          Previously Approved Awards
        </h1>
        <RedeemedOfGroupReviewedCell groupId={groupId} />
      </div>
    </>
  )
}

export default RedeemedView
