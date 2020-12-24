import { useMutation, useFlash } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { useModal } from 'src/context/ModalContext'
import GroupForm from 'src/components/Scaffolds/GroupForm'
import PageLoader from 'src/components/PageLoader/PageLoader'

import { QUERY } from 'src/components/cells/GroupCardCell'

const CREATE_GROUP_MUTATION = gql`
  mutation CreateGroupMutation($input: CreateGroupInput!) {
    createGroup(input: $input) {
      id
    }
  }
`

const NewGroup = () => {
  const { close } = useModal()
  const { currentUser } = useAuth()
  const { addMessage } = useFlash()
  const [createGroup, { loading, error }] = useMutation(CREATE_GROUP_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
    onCompleted: () => {
      close()
      addMessage('Group created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    input.ownerId = currentUser.id
    createGroup({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      {loading && <PageLoader />}
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Group</h2>
      </header>
      <div className="rw-segment-main">
        <GroupForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGroup
