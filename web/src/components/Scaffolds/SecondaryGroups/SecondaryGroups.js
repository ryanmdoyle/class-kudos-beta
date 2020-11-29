import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/SecondaryGroupsCell'

const DELETE_SECONDARY_GROUP_MUTATION = gql`
  mutation DeleteSecondaryGroupMutation($id: String!) {
    deleteSecondaryGroup(id: $id) {
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

const SecondaryGroupsList = ({ secondaryGroups }) => {
  const { addMessage } = useFlash()
  const [deleteSecondaryGroup] = useMutation(DELETE_SECONDARY_GROUP_MUTATION, {
    onCompleted: () => {
      addMessage('SecondaryGroup deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete secondaryGroup ' + id + '?')) {
      deleteSecondaryGroup({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Owner id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {secondaryGroups.map((secondaryGroup) => (
            <tr key={secondaryGroup.id}>
              <td>{truncate(secondaryGroup.id)}</td>
              <td>{truncate(secondaryGroup.name)}</td>
              <td>{truncate(secondaryGroup.ownerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scaffoldsSecondaryGroup({
                      id: secondaryGroup.id,
                    })}
                    title={
                      'Show secondaryGroup ' + secondaryGroup.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.scaffoldsEditSecondaryGroup({
                      id: secondaryGroup.id,
                    })}
                    title={'Edit secondaryGroup ' + secondaryGroup.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete secondaryGroup ' + secondaryGroup.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(secondaryGroup.id)}
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

export default SecondaryGroupsList
