import BehaviorOptions from '../BehaviorOptions/BehaviorOptions'
import RewardOptions from '../RewardOptions/RewardOptions'
import EnrolledListCell from '../cells/EnrolledListCell/EnrolledListCell'

const OptionsView = ({ groupId }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-display mb-2">Group Options</h1>
      <BehaviorOptions groupId={groupId} />
      <RewardOptions groupId={groupId} />
      <div className="white-box mt-4">
        <h2 className="text-xl font-display mb-2">Enrolled</h2>
        <EnrolledListCell groupId={groupId} />
      </div>
    </div>
  )
}

export default OptionsView
