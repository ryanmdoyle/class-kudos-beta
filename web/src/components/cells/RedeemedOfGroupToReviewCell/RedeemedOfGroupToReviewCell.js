import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import truncate from 'src/lib/truncate'
import timeTag from 'src/lib/timeTag'

import { QUERY as approvedQuery } from 'src/components/cells/RedeemedOfGroupReviewedCell/RedeemedOfGroupReviewedCell'

export const QUERY = gql`
  query RedeemedOfGroupToReviewQuery($groupId: String!) {
    redeemedOfGroupToReview(groupId: $groupId) {
      id
      createdAt
      name
      cost
      response
      user {
        id
        firstName
        lastName
        profileImage
      }
    }
  }
`
const APPROVE_REDEEMED_MUTATION = gql`
  mutation ApproveRedeemedMutation($id: String!) {
    approveRedeemed(id: $id) {
      id
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
          <td className="text-gray-500">Nothing to review</td>
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

export const Success = ({ redeemedOfGroupToReview, groupId }) => {
  const [approveRedeemed] = useMutation(APPROVE_REDEEMED_MUTATION, {
    onCompleted: () => {
      toast.success('Accepted kudos redemption!', {
        classes: 'rw-flash-success',
      })
    },
    refetchQueries: [
      { query: QUERY, variables: { groupId } },
      { query: approvedQuery, variables: { groupId } },
    ],
    awaitRefetchQueries: true,
  })

  const [deleteRedeemed] = useMutation(DELETE_REDEEMED_MUTATION, {
    onCompleted: () => {
      toast.success('Redeemed kudos deleted.', { classes: 'rw-flash-success' })
    },
    refetchQueries: [{ query: QUERY, variables: { groupId } }],
    awaitRefetchQueries: true,
  })

  const onApproveClick = (id) => {
    if (
      confirm('Are you sure you want to approve redeemed kudos ' + id + '?')
    ) {
      approveRedeemed({ variables: { id } })
    }
  }

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
            <th>Requested On</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {redeemedOfGroupToReview?.map((redeemed) => (
            <tr key={redeemed?.id} className="h-16">
              <td>
                {truncate(
                  `${redeemed?.user.firstName} ${redeemed?.user.lastName}`
                )}
              </td>
              <td>
                {truncate(redeemed?.name)}
                {redeemed.response && (
                  <>
                    <br></br>
                    <span className="text-gray-400">
                      {truncate(redeemed?.response)}
                    </span>
                  </>
                )}
              </td>
              <td>{truncate(redeemed?.cost)}</td>
              <td>{timeTag(redeemed?.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <button
                    href="#"
                    title={'Approve redeemed ' + redeemed?.id}
                    className="rw-button rw-button-small rw-button-green"
                    onClick={() => onApproveClick(redeemed?.id)}
                  >
                    Approve
                  </button>
                  <button
                    href="#"
                    title={'Delete redeemed ' + redeemed?.id}
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
