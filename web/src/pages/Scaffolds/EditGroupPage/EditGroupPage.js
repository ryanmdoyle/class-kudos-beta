import GroupsLayout from 'src/layouts/Scaffolds/GroupsLayout'
import EditGroupCell from 'src/components/Scaffolds/EditGroupCell'

const EditGroupPage = ({ id }) => {
  return (
    <GroupsLayout>
      <EditGroupCell id={id} />
    </GroupsLayout>
  )
}

export default EditGroupPage
