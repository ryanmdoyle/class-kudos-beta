import NewEnrollmentByEnrollId from 'src/components/NewEnrollmentByEnrollId/NewEnrollmentByEnrollId'
import { useModal } from 'src/context/ModalContext'

const NewEnrollmentButton = ({ userId }) => {
  const { openModal } = useModal()
  const newGroup = () => {
    openModal(<NewEnrollmentByEnrollId userId={userId} />)
  }
  return (
    <button className="button-green absolute top-5 right-5" onClick={newGroup}>
      Add Class/Group
    </button>
  )
}

export default NewEnrollmentButton
