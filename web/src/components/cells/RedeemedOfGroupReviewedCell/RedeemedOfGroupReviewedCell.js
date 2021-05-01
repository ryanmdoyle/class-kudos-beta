import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import truncate from 'src/lib/truncate'
import timeTag from 'src/lib/timeTag'

export const QUERY = gql`
  query RedeemedOfGroupReviewedQuery($groupId: String!) {
    redeemedOfGroupReviewed(groupId: $groupId) {
      id
      reviewedAt
      name
      cost
      user {
        id
        firstName
        lastName
        profileImage
      }
    }
  }
`

const DELETE_REDEEMED_MUTATION = gql`
  mutation DeleteRedeemedMutation($id: String!) {
    deleteRedeemed(id: $id) {
      id
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, pollInterval: 60000 }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="rw-segment rw-table-wrapper-responsive overflow-y-scroll max-h-96">
    <table className="rw-table">
      <thead>
        <tr>
          <th>User</th>
          <th>Award Redeemed</th>
          <th>Kudo Cost</th>
          <th>Requested On</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-gray-500">Nothing reviewed</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ redeemedOfGroupReviewed, groupId }) => {
  const [deleteRedeemed] = useMutation(DELETE_REDEEMED_MUTATION, {
    onCompleted: () => {
      toast.success('Redeemed kudos deleted.', { classes: 'rw-flash-success' })
    },
    refetchQueries: [{ query: QUERY, variables: { groupId } }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete redeemed kudos ' + id + '?')) {
      deleteRedeemed({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive overflow-y-scroll max-h-96">
      <table className="rw-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Award Redeemed</th>
            <th>Kudo Cost</th>
            <th>Approved On</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {redeemedOfGroupReviewed?.map((redeemed) => (
            <tr key={redeemed?.id}>
              <td>
                {truncate(
                  `${redeemed?.user.firstName} ${redeemed?.user.lastName}`
                )}
              </td>
              <td>{truncate(redeemed?.name)}</td>
              <td>{truncate(redeemed?.cost)}</td>
              <td>{timeTag(redeemed?.reviewedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <button
                    href="#"
                    title={'Delete feedback ' + redeemed?.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(redeemed?.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
