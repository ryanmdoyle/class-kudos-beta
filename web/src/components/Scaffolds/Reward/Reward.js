import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/RewardsCell'

const DELETE_REWARD_MUTATION = gql`
  mutation DeleteRewardMutation($id: String!) {
    deleteReward(id: $id) {
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

const Reward = ({ reward }) => {
  const [deleteReward] = useMutation(DELETE_REWARD_MUTATION, {
    onCompleted: () => {
      navigate(routes.scaffoldsRewards())
      toast.success('Reward deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete reward ' + id + '?')) {
      deleteReward({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Reward {reward.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{reward.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{reward.name}</td>
            </tr>
            <tr>
              <th>Cost</th>
              <td>{reward.cost}</td>
            </tr>
            <tr>
              <th>Group id</th>
              <td>{reward.groupId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.scaffoldsEditReward({ id: reward.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(reward.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Reward
