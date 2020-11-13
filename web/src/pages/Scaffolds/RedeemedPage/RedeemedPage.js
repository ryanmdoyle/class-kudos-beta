import RedeemedsLayout from 'src/layouts/Scaffolds/RedeemedsLayout'
import RedeemedCell from 'src/components/Scaffolds/RedeemedCell'

const RedeemedPage = ({ id }) => {
  return (
    <RedeemedsLayout>
      <RedeemedCell id={id} />
    </RedeemedsLayout>
  )
}

export default RedeemedPage
