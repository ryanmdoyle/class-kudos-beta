import { useAuth } from '@redwoodjs/auth'

import RewardsOwnedCell from 'src/components/cells/RewardsOwnedCell'

const ReuseRewards = ({ groupId }) => {
  const { currentUser } = useAuth()

  return (
    <div className="h-96 overflow-scroll">
      <h2 className="text-xl font-display">
        Copy Rewards
      </h2>
      <p>Quickly add a reward from another class or group.</p>
      <RewardsOwnedCell userId={currentUser?.id} parentGroupId={groupId} />
    </div>
  )
}

export default ReuseRewards
