import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import { QUERY } from 'src/components/cells/RewardsOfGroupCell/RewardsOfGroupCell'

const COPY_REWARD = gql`
  mutation copyReward($rewardId: String!, $groupId: String!) {
    copyReward(rewardId: $rewardId, groupId: $groupId) {
      id
    }
  }
`

const CopyRewardListItem = ({ reward, parentGroupId }) => {
  const { isOpen, close } = useModal()

  const [copyReward, { loading }] = useMutation(COPY_REWARD, {
    refetchQueries: [{query: QUERY, variables: { groupId: parentGroupId }}],
    onCompleted: () => {
      toast.success('Added feedback!', { className: 'rw-flash-success' })
      if (isOpen) close() // close modal for custom values
    },
    onError: () => {
      toast.error('Oops, there was a problem. Please try again.')
    },
  })

  const copy = () => {
    copyReward({
      variables: {
        groupId: parentGroupId,
        rewardId: reward.id
      }
    })
  }

  return (
    <li className="white-box mb-2 mx-2 flex justify-between items-center" key={reward.id}>
      <span>
        <span>{reward.name}</span>
        {` - `}
        <span className="text-gray-500">{reward.group.name}</span>
      </span>
      <span>
        <span className="text-gray-500">Value: </span>
        <span>{reward.cost}</span>
        <button className={`button-green ml-4 ${loading ? 'cursor-wait' : ''}`} onClick={copy} disabled={loading} >Copy</button>
      </span>
    </li>
  )
}

export default CopyRewardListItem
