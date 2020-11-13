import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserRoleForm from 'src/components/Scaffolds/UserRoleForm'

export const QUERY = gql`
  query FIND_USER_ROLE_BY_ID($id: String!) {
    userRole: userRole(id: $id) {
      id
      createdAt
      updatedAt
      name
      userId
    }
  }
`
const UPDATE_USER_ROLE_MUTATION = gql`
  mutation UpdateUserRoleMutation($id: String!, $input: UpdateUserRoleInput!) {
    updateUserRole(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      name
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ userRole }) => {
  const { addMessage } = useFlash()
  const [updateUserRole, { loading, error }] = useMutation(
    UPDATE_USER_ROLE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsUserRoles())
        addMessage('UserRole updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateUserRole({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserRole {userRole.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserRoleForm
          userRole={userRole}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
