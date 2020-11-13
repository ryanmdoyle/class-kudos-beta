import RewardsLayout from 'src/layouts/Scaffolds/RewardsLayout'
import RewardCell from 'src/components/Scaffolds/RewardCell'

const RewardPage = ({ id }) => {
  return (
    <RewardsLayout>
      <RewardCell id={id} />
    </RewardsLayout>
  )
}

export default RewardPage
