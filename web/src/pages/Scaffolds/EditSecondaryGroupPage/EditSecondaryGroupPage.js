import SecondaryGroupsLayout from 'src/layouts/Scaffolds/SecondaryGroupsLayout'
import EditSecondaryGroupCell from 'src/components/Scaffolds/EditSecondaryGroupCell'

const EditSecondaryGroupPage = ({ id }) => {
  return (
    <SecondaryGroupsLayout>
      <EditSecondaryGroupCell id={id} />
    </SecondaryGroupsLayout>
  )
}

export default EditSecondaryGroupPage
