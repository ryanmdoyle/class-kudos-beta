import { useModal } from 'src/context/ModalContext'

import NewReward from '../Scaffolds/NewReward/NewReward'
import RewardsListCell from 'src/components/cells/RewardsListCell/RewardsListCell'

const RewardOptions = ({ groupId }) => {
  const { openModal } = useModal()

  const addReward = () => {
    openModal(<NewReward groupId={groupId} />)
  }
  return (
    <div className="white-box mt-4">
      <h2 className="text-xl font-display mb-2">Rewards</h2>
      <RewardsListCell groupId={groupId} />
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
