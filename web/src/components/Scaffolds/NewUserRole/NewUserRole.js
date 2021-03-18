import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserRoleForm from 'src/components/Scaffolds/UserRoleForm'

import { QUERY } from 'src/components/Scaffolds/UserRolesCell'

const CREATE_USER_ROLE_MUTATION = gql`
  mutation CreateUserRoleMutation($input: CreateUserRoleInput!) {
    createUserRole(input: $input) {
      id
    }
  }
`

const NewUserRole = () => {
  const [createUserRole, { loading, error }] = useMutation(
    CREATE_USER_ROLE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsUserRoles())
        toast.success('UserRole created.', { classes: 'rw-flash-success' })
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onSave = (input) => {
    createUserRole({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserRole</h2>
      </header>
      <div className="rw-segment-main">
        <UserRoleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserRole
