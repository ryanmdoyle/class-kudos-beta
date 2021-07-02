import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/RedeemedsCell'

const DELETE_REDEEMED_MUTATION = gql`
  mutation DeleteRedeemedMutation($id: String!) {
    deleteRedeemed(id: $id) {
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

const RedeemedsList = ({ redeemeds }) => {
  const [deleteRedeemed] = useMutation(DELETE_REDEEMED_MUTATION, {
    onCompleted: () => {
      toast.success('Redeemed deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete redeemed ' + id + '?')) {
      deleteRedeemed({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>name</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {redeemeds.map((redeemed) => (
            <tr key={redeemed.id}>
              <td>{truncate(redeemed.id)}</td>
              <td>{truncate(redeemed.userId)}</td>
              <td>{truncate(redeemed.name)}</td>
              <td>{timeTag(redeemed.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scaffoldsRedeemed({ id: redeemed.id })}
                    title={'Show redeemed ' + redeemed.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.scaffoldsEditRedeemed({ id: redeemed.id })}
                    title={'Edit redeemed ' + redeemed.id}
                    className="rw-button rw-button-small rw-button-green"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete redeemed ' + redeemed.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(redeemed.id)}
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

export default RedeemedsList
