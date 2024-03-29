import BehaviorOptions from 'src/components/BehaviorOptions/BehaviorOptions'
import RewardOptions from 'src/components/RewardOptions/RewardOptions'
import EnrolledOptions from 'src/components/EnrolledOptions/EnrolledOptions'

import { MetaTags } from '@redwoodjs/web'

const OptionsView = ({ groupId }) => {
  return (
    <>
      <MetaTags
        title={`Class Kudos - Options`}
        description={`Group Options Page`}
      />
      <div className="p-4 h-sub-full overflow-y-scroll">
        <h1 className="text-2xl font-display mb-2">Group Options</h1>
        <BehaviorOptions groupId={groupId} />
        <RewardOptions groupId={groupId} />
        <EnrolledOptions groupId={groupId} />
      </div>
    </>
  )
}

export default OptionsView
