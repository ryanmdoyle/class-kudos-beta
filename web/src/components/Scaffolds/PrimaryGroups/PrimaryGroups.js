import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/PrimaryGroupsCell'

const DELETE_PRIMARY_GROUP_MUTATION = gql`
  mutation DeletePrimaryGroupMutation($id: String!) {
    deletePrimaryGroup(id: $id) {
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

const PrimaryGroupsList = ({ primaryGroups }) => {
  const { addMessage } = useFlash()
  const [deletePrimaryGroup] = useMutation(DELETE_PRIMARY_GROUP_MUTATION, {
    onCompleted: () => {
      addMessage('PrimaryGroup deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete primaryGroup ' + id + '?')) {
      deletePrimaryGroup({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Owner id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {primaryGroups.map((primaryGroup) => (
            <tr key={primaryGroup.id}>
              <td>{truncate(primaryGroup.id)}</td>
              <td>{truncate(primaryGroup.name)}</td>
              <td>{truncate(primaryGroup.description)}</td>
              <td>{truncate(primaryGroup.ownerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scaffoldsPrimaryGroup({ id: primaryGroup.id })}
                    title={'Show primaryGroup ' + primaryGroup.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.scaffoldsEditPrimaryGroup({
                      id: primaryGroup.id,
                    })}
                    title={'Edit primaryGroup ' + primaryGroup.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete primaryGroup ' + primaryGroup.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(primaryGroup.id)}
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

export default PrimaryGroupsList
