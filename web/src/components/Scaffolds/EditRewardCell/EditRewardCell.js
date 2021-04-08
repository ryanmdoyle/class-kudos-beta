import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import { useModal } from 'src/context/ModalContext'
import RewardForm from 'src/components/Scaffolds/RewardForm'

export const QUERY = gql`
  query FIND_REWARD_BY_ID($id: String!) {
    reward: reward(id: $id) {
      id
      name
      cost
      responseRequired
      responsePrompt
      groupId
    }
  }
`
const UPDATE_REWARD_MUTATION = gql`
  mutation UpdateRewardMutation($id: String!, $input: UpdateRewardInput!) {
    updateReward(id: $id, input: $input) {
      id
      name
      cost
      responseRequired
      responsePrompt
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ reward }) => {
  const { close } = useModal()
  const [updateReward, { loading, error }] = useMutation(
    UPDATE_REWARD_MUTATION,
    {
      onCompleted: () => {
        close()
        toast.success('Reward updated.', { classes: 'rw-flash-success' })
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
