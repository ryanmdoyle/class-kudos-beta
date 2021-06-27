import { useModal } from 'src/context/ModalContext'

import NewBehavior from 'src/components/NewBehavior/NewBehavior'
import ReuseBehaviors from 'src/components/ReuseBehaviors/ReuseBehaviors'
import BehaviorsOfGroupCell from 'src/components/cells/BehaviorsOfGroupCell/BehaviorsOfGroupCell'

const BehaviorOptions = ({ groupId }) => {
  const { openModal } = useModal()

  const addBehavior = () => {
    openModal(<NewBehavior groupId={groupId} />)
  }

  const reuseBehaviors = () => {
    openModal(<ReuseBehaviors groupId={groupId} />)
  }

  return (
    <div className="white-box">
    <div className="flex justify-between mb-4 h-8 items-center">
      <h2 className="text-xl font-display">Behaviors</h2>
      <div>
      <button
          className="button-green mr-2"
          onClick={() => {
            addBehavior()
          }}
        >
          Add New
        </button>
        <button
          className="button-green"
          onClick={() => {
            reuseBehaviors()
          }}
        >
          Reuse
        </button>
      </div>
    </div>
    <BehaviorsOfGroupCell groupId={groupId} />
    </div>
  )
}

export default BehaviorOptions
