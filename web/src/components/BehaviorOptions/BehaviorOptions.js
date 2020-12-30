import { useModal } from 'src/context/ModalContext'

import NewBehavior from '../Scaffolds/NewBehavior/NewBehavior'
import BehaviorsListCell from 'src/components/cells/BehaviorsListCell/BehaviorsListCell'

const BehaviorOptions = ({ groupId }) => {
  const { openModal } = useModal()

  const addBehavior = () => {
    openModal(<NewBehavior groupId={groupId} />)
  }

  return (
    <div className="white-box">
      <h2 className="text-xl font-display mb-2">Behaviors</h2>
      <BehaviorsListCell groupId={groupId} />
      <div className="flex w-full justify-end">
        <button
          className="button-green mt-2"
          onClick={() => {
            addBehavior()
          }}
        >
          Add Behavior
        </button>
      </div>
    </div>
  )
}

export default BehaviorOptions
