import SecondaryGroupsLayout from 'src/layouts/Scaffolds/SecondaryGroupsLayout'
import SecondaryGroupCell from 'src/components/Scaffolds/SecondaryGroupCell'

const SecondaryGroupPage = ({ id }) => {
  return (
    <SecondaryGroupsLayout>
      <SecondaryGroupCell id={id} />
    </SecondaryGroupsLayout>
  )
}

export default SecondaryGroupPage
