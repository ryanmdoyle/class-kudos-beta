import { useMutation, useFlash } from '@redwoodjs/web'
import { useModal } from 'src/context/ModalContext'
import PrimaryGroupForm from 'src/components/Scaffolds/PrimaryGroupForm'

export const QUERY = gql`
  query FIND_PRIMARY_GROUP_BY_ID($id: String!) {
    primaryGroup: primaryGroup(id: $id) {
      id
      name
      description
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
      description
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ primaryGroup }) => {
  const { addMessage } = useFlash()
  const { close } = useModal()
  const [updatePrimaryGroup, { loading, error }] = useMutation(
    UPDATE_PRIMARY_GROUP_MUTATION,
    {
      onCompleted: () => {
        // navigate(routes.scaffoldsPrimaryGroups())
        close()
        addMessage('PrimaryGroup updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updatePrimaryGroup({ variables: { id, input } })
  }

  return (
    <div>
      <header>
        <h2 className="text-xl text-purple-800 font-display mb-6">
          Edit Primary Group {primaryGroup.name}
        </h2>
      </header>
      <PrimaryGroupForm
        primaryGroup={primaryGroup}
        onSave={onSave}
        error={error}
        loading={loading}
      />
    </div>
  )
}
