import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'
import RewardForm from 'src/components/RewardForm'

import { QUERY } from 'src/components/cells/RewardsOfGroupCell'

const CREATE_REWARD_MUTATION = gql`
  mutation CreateRewardMutation($input: CreateRewardInput!) {
    createReward(input: $input) {
      id
    }
  }
`

const NewReward = ({ groupId }) => {
  const { close } = useModal()

  const [createReward, { loading, error }] = useMutation(
    CREATE_REWARD_MUTATION,
    {
      awaitRefetchQueries: true,
      refetchQueries: [{ query: QUERY, variables: { groupId: groupId } }],
      onCompleted: () => {
        close()
        toast.success('Reward created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createReward({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Reward</h2>
      </header>
      <div className="rw-segment-main">
        <RewardForm
          onSave={onSave}
          loading={loading}
          error={error}
          groupId={groupId}
        />
      </div>
    </div>
  )
}

export default NewReward
