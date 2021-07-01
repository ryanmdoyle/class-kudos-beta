import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import { QUERY } from 'src/components/cells/BehaviorsOfGroupCell/BehaviorsOfGroupCell'

const COPY_BEHAVIOR = gql`
  mutation copyBehavior($behaviorId: String!, $groupId: String!) {
    copyBehavior(behaviorId: $behaviorId, groupId: $groupId) {
      id
    }
  }
`

const CopyBehaviorListItem = ({ behavior, parentGroupId }) => {
  const { isOpen, close } = useModal()

  const [copyBehavior, { loading }] = useMutation(COPY_BEHAVIOR, {
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
    copyBehavior({
      variables: {
        groupId: parentGroupId,
        behaviorId: behavior.id
      }
    })
  }

  return (
    <li className="white-box mb-2 mx-2 flex justify-between items-center" key={behavior.id}>
      <span>
        <span>{behavior.name}</span>
        {` - `}
        <span className="text-gray-500">{behavior.group.name}</span>
      </span>
      <span>
        <span className="text-gray-500">Value: </span>
        <span>{behavior.value}</span>
        <button className={`button-green ml-4 ${loading ? 'cursor-wait' : ''}`} onClick={copy} disabled={loading} >Copy</button>
      </span>
    </li>
  )
}

export default CopyBehaviorListItem
