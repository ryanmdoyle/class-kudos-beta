import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/GroupsCell'

const DELETE_GROUP_MUTATION = gql`
  mutation DeleteGroupMutation($id: String!) {
    deleteGroup(id: $id) {
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

const Group = ({ group }) => {
  const [deleteGroup] = useMutation(DELETE_GROUP_MUTATION, {
    onCompleted: () => {
      navigate(routes.scaffoldsGroups())
      toast.success('Group deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete group ' + id + '?')) {
      deleteGroup({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Group {group.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{group.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{group.type}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{group.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{group.description}</td>
            </tr>
            <tr>
              <th>Enroll id</th>
              <td>{group.enrollId}</td>
            </tr>
            <tr>
              <th>Owner id</th>
              <td>{group.ownerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.scaffoldsEditGroup({ id: group.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(group.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Group
