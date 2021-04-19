import NewGroup from 'src/components/NewGroup/NewGroup'
import { useModal } from 'src/context/ModalContext'

const NewGroupButton = () => {
  const { openModal } = useModal()
  const newGroup = () => {
    openModal(<NewGroup />)
  }
  return (
    <button className="button-green absolute top-5 right-5" onClick={newGroup}>
      Create New
    </button>
  )
}

export default NewGroupButton
