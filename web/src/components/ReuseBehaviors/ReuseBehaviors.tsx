import { useAuth } from '@redwoodjs/auth'

import BehaviorsOwnedCell from 'src/components/cells/BehaviorsOwnedCell'

const ReuseBehaviors = () => {
  const { currentUser } = useAuth()
  return (
    <div className="h-96 overflow-scroll">
      <h2 className="text-xl font-display">
        Reuse Behavior from another Group
      </h2>
      <BehaviorsOwnedCell userId={currentUser.id} />
    </div>
  )
}

export default ReuseBehaviors
