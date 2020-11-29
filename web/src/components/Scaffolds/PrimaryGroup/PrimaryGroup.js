import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/PrimaryGroupsCell'

const DELETE_PRIMARY_GROUP_MUTATION = gql`
  mutation DeletePrimaryGroupMutation($id: String!) {
    deletePrimaryGroup(id: $id) {
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

const PrimaryGroup = ({ primaryGroup }) => {
  const { addMessage } = useFlash()
  const [deletePrimaryGroup] = useMutation(DELETE_PRIMARY_GROUP_MUTATION, {
    onCompleted: () => {
      navigate(routes.scaffoldsPrimaryGroups())
      addMessage('PrimaryGroup deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete primaryGroup ' + id + '?')) {
      deletePrimaryGroup({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PrimaryGroup {primaryGroup.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{primaryGroup.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{primaryGroup.name}</td>
            </tr>
            <tr>
              <th>Owner id</th>
              <td>{primaryGroup.ownerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.scaffoldsEditPrimaryGroup({ id: primaryGroup.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(primaryGroup.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default PrimaryGroup
