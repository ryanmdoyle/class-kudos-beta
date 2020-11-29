import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PrimaryGroupForm from 'src/components/Scaffolds/PrimaryGroupForm'

import { QUERY } from 'src/components/Scaffolds/PrimaryGroupsCell'

const CREATE_PRIMARY_GROUP_MUTATION = gql`
  mutation CreatePrimaryGroupMutation($input: CreatePrimaryGroupInput!) {
    createPrimaryGroup(input: $input) {
      id
    }
  }
`

const NewPrimaryGroup = () => {
  const { addMessage } = useFlash()
  const [createPrimaryGroup, { loading, error }] = useMutation(
    CREATE_PRIMARY_GROUP_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsPrimaryGroups())
        addMessage('PrimaryGroup created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createPrimaryGroup({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PrimaryGroup</h2>
      </header>
      <div className="rw-segment-main">
        <PrimaryGroupForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPrimaryGroup
