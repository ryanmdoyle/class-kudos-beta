import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'
import GroupForm from 'src/components/Scaffolds/GroupForm'

export const QUERY = gql`
  query FIND_GROUP_BY_ID($id: String!) {
    group: group(id: $id) {
      id
      type
      name
      description
      ownerId
      enrollId
    }
  }
`
const UPDATE_GROUP_MUTATION = gql`
  mutation UpdateGroupMutation($id: String!, $input: UpdateGroupInput!) {
    updateGroup(id: $id, input: $input) {
      id
      type
      name
      description
      ownerId
      enrollId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ group, userId }) => {
  const { close } = useModal()

  const [updateGroup, { loading, error }] = useMutation(UPDATE_GROUP_MUTATION, {
    onCompleted: () => {
      close()
      toast.success('Group updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateGroup({ variables: { id, input } })
  }

  return (
    <div>
      <header>
        <h2 className="text-xl text-purple-800 font-display mb-6">
          Edit {group.name}
        </h2>
      </header>
      <GroupForm
        group={group}
        onSave={onSave}
        error={error}
        loading={loading}
        userId={userId}
      />
    </div>
  )
}
