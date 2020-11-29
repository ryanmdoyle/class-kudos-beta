import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SecondaryGroupForm from 'src/components/Scaffolds/SecondaryGroupForm'

import { QUERY } from 'src/components/Scaffolds/SecondaryGroupsCell'

const CREATE_SECONDARY_GROUP_MUTATION = gql`
  mutation CreateSecondaryGroupMutation($input: CreateSecondaryGroupInput!) {
    createSecondaryGroup(input: $input) {
      id
    }
  }
`

const NewSecondaryGroup = () => {
  const { addMessage } = useFlash()
  const [createSecondaryGroup, { loading, error }] = useMutation(
    CREATE_SECONDARY_GROUP_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsSecondaryGroups())
        addMessage('SecondaryGroup created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createSecondaryGroup({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SecondaryGroup</h2>
      </header>
      <div className="rw-segment-main">
        <SecondaryGroupForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSecondaryGroup
