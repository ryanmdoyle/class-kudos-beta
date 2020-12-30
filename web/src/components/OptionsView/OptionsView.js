import BehaviorOptions from '../BehaviorOptions/BehaviorOptions'
import RewardOptions from '../RewardOptions/RewardOptions'

const OptionsView = ({ groupId }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-display mb-2">Group Options</h1>
      <BehaviorOptions groupId={groupId} />
      <RewardOptions groupId={groupId} />
      <div className="white-box mt-4">
        <h2 className="text-xl font-display mb-2">Enrolled</h2>
        <h2>{'OptionsView'}</h2>
        <p>{'Find me in ./web/src/components/OptionsView/OptionsView.js'}</p>
      </div>
    </div>
  )
}

export default OptionsView
