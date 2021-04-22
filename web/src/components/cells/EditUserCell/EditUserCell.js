import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import { useModal } from 'src/context/ModalContext'
import UserForm from 'src/components/UserForm'

export const QUERY = gql`
  query FIND_USER_BY_ID($id: String!) {
    user: user(id: $id) {
      id
      uid
      firstName
      lastName
      email
      profileImage
      createdAt
      updatedAt
    }
  }
`
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      uid
      firstName
      lastName
      email
      profileImage
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ user }) => {
  const { close } = useModal()
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      close()
      toast.success('User updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div>
      <header>
        <h2 className="text-xl text-purple-800 font-display mb-6">
          Edit User {user.id}
        </h2>
      </header>
      <UserForm user={user} onSave={onSave} error={error} loading={loading} />
    </div>
  )
}
