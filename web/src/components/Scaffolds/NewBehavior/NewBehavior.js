import { useMutation, useFlash } from '@redwoodjs/web'
import { useModal } from 'src/context/ModalContext'
import BehaviorForm from 'src/components/Scaffolds/BehaviorForm'

import { QUERY } from 'src/components/cells/BehaviorsListCell'

const CREATE_BEHAVIOR_MUTATION = gql`
  mutation CreateBehaviorMutation($input: CreateBehaviorInput!) {
    createBehavior(input: $input) {
      id
    }
  }
`

const NewBehavior = ({ groupId }) => {
  const { close } = useModal()
  const { addMessage } = useFlash()
  const [createBehavior, { loading, error }] = useMutation(
    CREATE_BEHAVIOR_MUTATION,
    {
      awaitRefetchQueries: true,
      refetchQueries: [{ query: QUERY, variables: { groupId: groupId } }],
      onCompleted: () => {
        close()
        addMessage('Behavior created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    input.groupId = groupId
    createBehavior({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Behavior</h2>
      </header>
      <div className="rw-segment-main">
        <BehaviorForm
          onSave={onSave}
          loading={loading}
          error={error}
          groupId={groupId}
        />
      </div>
    </div>
  )
}

export default NewBehavior
