import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/GroupsCell'

const DELETE_GROUP_MUTATION = gql`
  mutation DeleteGroupMutation($id: String!) {
    deleteGroup(id: $id) {
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

const GroupsList = ({ groups }) => {
  const { addMessage } = useFlash()
  const [deleteGroup] = useMutation(DELETE_GROUP_MUTATION, {
    onCompleted: () => {
      addMessage('Group deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete group ' + id + '?')) {
      deleteGroup({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
            <th>Owner id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id}>
              <td>{truncate(group.id)}</td>
              <td>{truncate(group.type)}</td>
              <td>{truncate(group.name)}</td>
              <td>{truncate(group.description)}</td>
              <td>{truncate(group.ownerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scaffoldsGroup({ id: group.id })}
                    title={'Show group ' + group.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.scaffoldsEditGroup({ id: group.id })}
                    title={'Edit group ' + group.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete group ' + group.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(group.id)}
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

export default GroupsList
