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

const APPROVE_REDEEMEDS_MUTATION = gql`
  mutation ApproveRedeemedsMutation($ids: [UpdateRedeemedManyInput!]!) {
    approveRedeemeds(ids: $ids) {
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

  const [approveRedeemeds] = useMutation(APPROVE_REDEEMEDS_MUTATION, {
    onCompleted: () => {
      toast.success('Accepted redemptions!', {
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

  const onApproveClick = (id, name) => {
    if (confirm('Are you sure you want to approve ' + name + '?')) {
      approveRedeemed({ variables: { id } })
    }
  }

  const onApproveAll = () => {
    const ids = redeemedOfGroupToReview.map((redeemed) => {
      return {
        id: redeemed.id,
      }
    })
    if (
      confirm(
        'Are you sure you want to approve all ' + ids.length + ' requests ?'
      )
    ) {
      approveRedeemeds({ variables: { ids } })
    }
  }

  const onDeleteClick = (id, name) => {
    if (
      confirm(
        'Are you sure you want to delete the request to redeem ' + name + '?'
      )
    ) {
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
            <th className="text-right text-xs">
              <span
                className="p-2 bg-green-400 rounded-md text-white hover:bg-green-500"
                onClick={onApproveAll}
              >
                APPROVE ALL
              </span>
            </th>
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
                    title={'Approve redeemed ' + redeemed?.name}
                    className="rw-button rw-button-small rw-button-green"
                    onClick={() => onApproveClick(redeemed?.id, redeemed?.name)}
                  >
                    Approve
                  </button>
                  <button
                    href="#"
                    title={'Delete redeemed ' + redeemed?.name}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(redeemed?.id, redeemed?.name)}
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
