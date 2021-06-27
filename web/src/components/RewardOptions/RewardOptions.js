import { useModal } from 'src/context/ModalContext'

import NewReward from 'src/components/NewReward/NewReward'
import RewardsOfGroupCell from 'src/components/cells/RewardsOfGroupCell/RewardsOfGroupCell'

const RewardOptions = ({ groupId }) => {
  const { openModal } = useModal()

  const addReward = () => {
    openModal(<NewReward groupId={groupId} />)
  }
  return (
    <div className="white-box mt-4">
    <div className="flex justify-between mb-4 h-8 items-center">
      <h2 className="text-xl font-display">Rewards</h2>
      <div className="flex w-full justify-end">
        <button
          className="button-green"
          onClick={() => {
            addReward()
          }}
        >
          Add Reward
        </button>
      </div>
    </div>
    <RewardsOfGroupCell groupId={groupId} />
    </div>
  )
}

export default RewardOptions
