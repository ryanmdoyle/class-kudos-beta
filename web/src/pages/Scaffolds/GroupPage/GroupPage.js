import GroupsLayout from 'src/layouts/Scaffolds/GroupsLayout'
import GroupCell from 'src/components/Scaffolds/GroupCell'

const GroupPage = ({ id }) => {
  return (
    <GroupsLayout>
      <GroupCell id={id} />
    </GroupsLayout>
  )
}

export default GroupPage
