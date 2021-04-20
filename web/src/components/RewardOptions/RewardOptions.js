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
      <h2 className="text-xl font-display mb-2">Rewards</h2>
      <RewardsOfGroupCell groupId={groupId} />
      <div className="flex w-full justify-end">
        <button
          className="button-green mt-2"
          onClick={() => {
            addReward()
          }}
        >
          Add Reward
        </button>
      </div>
    </div>
  )
}

export default RewardOptions
