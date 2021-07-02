import { Link, routes, navigate } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Scaffolds/BehaviorsCell'

const DELETE_BEHAVIOR_MUTATION = gql`
  mutation DeleteBehaviorMutation($id: String!) {
    deleteBehavior(id: $id) {
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

const Behavior = ({ behavior }) => {
  const [deleteBehavior] = useMutation(DELETE_BEHAVIOR_MUTATION, {
    onCompleted: () => {
      navigate(routes.scaffoldsBehaviors())
      toast.success('Behavior deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete behavior ' + id + '?')) {
      deleteBehavior({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Behavior {behavior.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{behavior.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{behavior.name}</td>
            </tr>
            <tr>
              <th>Value</th>
              <td>{behavior.value}</td>
            </tr>
            <tr>
              <th>Group id</th>
              <td>{behavior.groupId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.scaffoldsEditBehavior({ id: behavior.id })}
          className="rw-button rw-button-green"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(behavior.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Behavior
