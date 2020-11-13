import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RewardForm from 'src/components/Scaffolds/RewardForm'

export const QUERY = gql`
  query FIND_REWARD_BY_ID($id: String!) {
    reward: reward(id: $id) {
      id
      name
      cost
    }
  }
`
const UPDATE_REWARD_MUTATION = gql`
  mutation UpdateRewardMutation($id: String!, $input: UpdateRewardInput!) {
    updateReward(id: $id, input: $input) {
      id
      name
      cost
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ reward }) => {
  const { addMessage } = useFlash()
  const [updateReward, { loading, error }] = useMutation(
    UPDATE_REWARD_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsRewards())
        addMessage('Reward updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateReward({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Reward {reward.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RewardForm
          reward={reward}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
