import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PrimaryGroupForm from 'src/components/Scaffolds/PrimaryGroupForm'

export const QUERY = gql`
  query FIND_PRIMARY_GROUP_BY_ID($id: String!) {
    primaryGroup: primaryGroup(id: $id) {
      id
      name
      ownerId
    }
  }
`
const UPDATE_PRIMARY_GROUP_MUTATION = gql`
  mutation UpdatePrimaryGroupMutation(
    $id: String!
    $input: UpdatePrimaryGroupInput!
  ) {
    updatePrimaryGroup(id: $id, input: $input) {
      id
      name
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ primaryGroup }) => {
  const { addMessage } = useFlash()
  const [updatePrimaryGroup, { loading, error }] = useMutation(
    UPDATE_PRIMARY_GROUP_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsPrimaryGroups())
        addMessage('PrimaryGroup updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updatePrimaryGroup({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PrimaryGroup {primaryGroup.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PrimaryGroupForm
          primaryGroup={primaryGroup}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
