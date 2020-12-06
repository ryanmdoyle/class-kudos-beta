import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import GroupForm from 'src/components/Scaffolds/GroupForm'

import { QUERY } from 'src/components/Scaffolds/GroupsCell'

const CREATE_GROUP_MUTATION = gql`
  mutation CreateGroupMutation($input: CreateGroupInput!) {
    createGroup(input: $input) {
      id
    }
  }
`

const NewGroup = () => {
  const { addMessage } = useFlash()
  const [createGroup, { loading, error }] = useMutation(CREATE_GROUP_MUTATION, {
    onCompleted: () => {
      navigate(routes.scaffoldsGroups())
      addMessage('Group created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createGroup({ variables: { input } })
  }

  return (
    <div className="rw-segment">
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
