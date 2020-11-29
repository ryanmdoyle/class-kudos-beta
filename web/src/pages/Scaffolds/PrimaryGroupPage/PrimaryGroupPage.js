import PrimaryGroupsLayout from 'src/layouts/Scaffolds/PrimaryGroupsLayout'
import PrimaryGroupCell from 'src/components/Scaffolds/PrimaryGroupCell'

const PrimaryGroupPage = ({ id }) => {
  return (
    <PrimaryGroupsLayout>
      <PrimaryGroupCell id={id} />
    </PrimaryGroupsLayout>
  )
}

export default PrimaryGroupPage
