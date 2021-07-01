import { useAuth } from '@redwoodjs/auth'

import BehaviorsOwnedCell from 'src/components/cells/BehaviorsOwnedCell'

const ReuseBehaviors = ({ groupId }) => {
  const { currentUser } = useAuth()

  return (
    <div className="h-96 overflow-scroll">
      <h2 className="text-xl font-display">
        Copy Behaviors
      </h2>
      <p>Quickly add a behavior from another class or group.</p>
      <BehaviorsOwnedCell userId={currentUser.id} parentGroupId={groupId} />
    </div>
  )
}

export default ReuseBehaviors
