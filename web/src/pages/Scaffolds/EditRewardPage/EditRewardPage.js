import RewardsLayout from 'src/layouts/Scaffolds/RewardsLayout'
import EditRewardCell from 'src/components/cells/EditRewardCell'

const EditRewardPage = ({ id }) => {
  return (
    <RewardsLayout>
      <EditRewardCell id={id} />
    </RewardsLayout>
  )
}

export default EditRewardPage
