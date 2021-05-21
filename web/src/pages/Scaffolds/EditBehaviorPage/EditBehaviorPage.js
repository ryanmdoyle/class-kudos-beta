import BehaviorsLayout from 'src/layouts/Scaffolds/BehaviorsLayout'
import EditBehaviorCell from 'src/components/cells/EditBehaviorCell'

const EditBehaviorPage = ({ id }) => {
  return (
    <BehaviorsLayout>
      <EditBehaviorCell id={id} />
    </BehaviorsLayout>
  )
}

export default EditBehaviorPage
