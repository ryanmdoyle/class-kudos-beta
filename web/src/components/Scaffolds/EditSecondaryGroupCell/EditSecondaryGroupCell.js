import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SecondaryGroupForm from 'src/components/Scaffolds/SecondaryGroupForm'

export const QUERY = gql`
  query FIND_SECONDARY_GROUP_BY_ID($id: String!) {
    secondaryGroup: secondaryGroup(id: $id) {
      id
      name
      ownerId
    }
  }
`
const UPDATE_SECONDARY_GROUP_MUTATION = gql`
  mutation UpdateSecondaryGroupMutation(
    $id: String!
    $input: UpdateSecondaryGroupInput!
  ) {
    updateSecondaryGroup(id: $id, input: $input) {
      id
      name
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ secondaryGroup }) => {
  const { addMessage } = useFlash()
  const [updateSecondaryGroup, { loading, error }] = useMutation(
    UPDATE_SECONDARY_GROUP_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsSecondaryGroups())
        addMessage('SecondaryGroup updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateSecondaryGroup({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit SecondaryGroup {secondaryGroup.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SecondaryGroupForm
          secondaryGroup={secondaryGroup}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
