import RedeemedsLayout from 'src/layouts/Scaffolds/RedeemedsLayout'
import EditRedeemedCell from 'src/components/Scaffolds/EditRedeemedCell'

const EditRedeemedPage = ({ id }) => {
  return (
    <RedeemedsLayout>
      <EditRedeemedCell id={id} />
    </RedeemedsLayout>
  )
}

export default EditRedeemedPage
