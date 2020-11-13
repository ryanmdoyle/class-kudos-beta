import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RewardForm from 'src/components/Scaffolds/RewardForm'

import { QUERY } from 'src/components/Scaffolds/RewardsCell'

const CREATE_REWARD_MUTATION = gql`
  mutation CreateRewardMutation($input: CreateRewardInput!) {
    createReward(input: $input) {
      id
    }
  }
`

const NewReward = () => {
  const { addMessage } = useFlash()
  const [createReward, { loading, error }] = useMutation(
    CREATE_REWARD_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsRewards())
        addMessage('Reward created.', { classes: 'rw-flash-success' })
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
        <RewardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewReward
