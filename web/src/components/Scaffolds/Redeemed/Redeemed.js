import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/RedeemedsCell'

const DELETE_REDEEMED_MUTATION = gql`
  mutation DeleteRedeemedMutation($id: String!) {
    deleteRedeemed(id: $id) {
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

const Redeemed = ({ redeemed }) => {
  const [deleteRedeemed] = useMutation(DELETE_REDEEMED_MUTATION, {
    onCompleted: () => {
      navigate(routes.scaffoldsRedeemeds())
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Redeemed {redeemed.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{redeemed.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{redeemed.userId}</td>
            </tr>
            <tr>
              <th>Reward id</th>
              <td>{redeemed.rewardId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(redeemed.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.scaffoldsEditRedeemed({ id: redeemed.id })}
          className="rw-button rw-button-green"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(redeemed.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Redeemed
