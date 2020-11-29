import PrimaryGroupsLayout from 'src/layouts/Scaffolds/PrimaryGroupsLayout'
import EditPrimaryGroupCell from 'src/components/Scaffolds/EditPrimaryGroupCell'

const EditPrimaryGroupPage = ({ id }) => {
  return (
    <PrimaryGroupsLayout>
      <EditPrimaryGroupCell id={id} />
    </PrimaryGroupsLayout>
  )
}

export default EditPrimaryGroupPage
