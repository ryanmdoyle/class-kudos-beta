import { useModal } from 'src/context/ModalContext'
import NewBehavior from '../Scaffolds/NewBehavior/NewBehavior'
import BehaviorsListCell from 'src/components/cells/BehaviorsListCell/BehaviorsListCell'

const OptionsView = ({ groupId }) => {
  const { openModal } = useModal()

  const addBehavior = () => {
    openModal(<NewBehavior groupId={groupId} />)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-display mb-2">Group Options</h1>
      <h2 className="text-xl font-display my-2">Behaviors</h2>
      <BehaviorsListCell groupId={groupId} />
      <button
        className="button-green"
        onClick={() => {
          addBehavior()
        }}
      >
        Add Behavior
      </button>
      <h2 className="text-xl font-display my-2">Rewards</h2>
      <h2 className="text-xl font-display my-2">Enrolled</h2>
      <h2>{'OptionsView'}</h2>
      <p>{'Find me in ./web/src/components/OptionsView/OptionsView.js'}</p>
    </div>
  )
}

export default OptionsView
