import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/UserRolesCell'

const DELETE_USER_ROLE_MUTATION = gql`
  mutation DeleteUserRoleMutation($id: String!) {
    deleteUserRole(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const UserRole = ({ userRole }) => {
  const [deleteUserRole] = useMutation(DELETE_USER_ROLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.scaffoldsUserRoles())
      toast.success('UserRole deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete userRole ' + id + '?')) {
      deleteUserRole({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserRole {userRole.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userRole.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(userRole.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(userRole.updatedAt)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{userRole.name}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{userRole.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.scaffoldsEditUserRole({ id: userRole.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userRole.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default UserRole
