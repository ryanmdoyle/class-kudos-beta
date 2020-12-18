import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/BehaviorsCell'

const DELETE_BEHAVIOR_MUTATION = gql`
  mutation DeleteBehaviorMutation($id: String!) {
    deleteBehavior(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const BehaviorsList = ({ behaviors }) => {
  const { addMessage } = useFlash()
  const [deleteBehavior] = useMutation(DELETE_BEHAVIOR_MUTATION, {
    onCompleted: () => {
      addMessage('Behavior deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete behavior ' + id + '?')) {
      deleteBehavior({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Value</th>
            <th>Group id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {behaviors.map((behavior) => (
            <tr key={behavior.id}>
              <td>{truncate(behavior.id)}</td>
              <td>{truncate(behavior.name)}</td>
              <td>{truncate(behavior.value)}</td>
              <td>{truncate(behavior.groupId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scaffoldsBehavior({ id: behavior.id })}
                    title={'Show behavior ' + behavior.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.scaffoldsEditBehavior({ id: behavior.id })}
                    title={'Edit behavior ' + behavior.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete behavior ' + behavior.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(behavior.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BehaviorsList
