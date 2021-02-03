import { useMutation, useFlash } from '@redwoodjs/web'
import { useModal } from 'src/context/ModalContext'

import EditRewardCell from 'src/components/Scaffolds/EditRewardCell'

import { QUERY } from 'src/components/cells/RewardsOfGroupCell/RewardsOfGroupCell'

const DELETE_REWARD_MUTATION = gql`
  mutation DeleteRewardMutation($id: String!) {
    deleteReward(id: $id) {
      id
    }
  }
`

const RewardOptionsListItem = ({ id, name, cost, groupId }) => {
  const { openModal } = useModal()
  const { addMessage } = useFlash()
  const [deleteBehavior] = useMutation(DELETE_REWARD_MUTATION, {
    onCompleted: () => {
      addMessage('Behavior deleted.', { classes: 'rw-flash-success' })
    },
    refetchQueries: [{ query: QUERY, variables: { groupId: groupId } }],
    awaitRefetchQueries: true,
  })

  const onEditClick = () => {
    openModal(<EditRewardCell id={id} />)
  }

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete reward ' + name + '?')) {
      deleteBehavior({ variables: { id } })
    }
  }

  return (
    <li
      className="w-full rounded bg-white shadow p-2 mb-2 flex justify-between items-center"
      key={id}
    >
      <span>{name}</span>
      <span className="text-red-500 font-bold flex items-center">
        {cost}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-4"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="gray"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => {
            onEditClick()
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <a
          href="#"
          title={'Delete behavior ' + name}
          className="rw-button rw-button-small rw-button-red ml-2"
          onClick={() => onDeleteClick(id)}
        >
          Delete
        </a>
      </span>
    </li>
  )
}

export default RewardOptionsListItem
