import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import truncate from 'src/lib/truncate'
import timeTag from 'src/lib/timeTag'

import { QUERY } from 'src/components/cells/GroupFeedbackCell/GroupFeedbackCell'

const DELETE_FEEDBACK_MUTATION = gql`
  mutation DeleteFeedbackMutationFromRecent($feedbackId: String!) {
    deleteFeedback(id: $feedbackId) {
      id
    }
  }
`

const RecentGroupFeedback = ({ feedbacksOfGroup, groupId }) => {
  const [deleteFeedback] = useMutation(DELETE_FEEDBACK_MUTATION, {
    onCompleted: () => {
      toast.success('Feedback deleted.', { classes: 'rw-flash-success' })
    },
    refetchQueries: [{ query: QUERY, variables: { groupId } }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (feedbackId) => {
    if (
      confirm('Are you sure you want to delete feedback ' + feedbackId + '?')
    ) {
      deleteFeedback({ variables: { feedbackId } })
    }
  }

  return (
    <div className="h-sub-full rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Behavior</th>
            <th>Given On</th>
            <th>Value</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {feedbacksOfGroup?.map((feedback) => (
            <tr key={feedback?.id}>
              <td>
                {truncate(
                  `${feedback?.user.firstName} ${feedback?.user.lastName}`
                )}
              </td>
              <td>{truncate(feedback?.name)}</td>
              <td>{timeTag(feedback?.createdAt)}</td>
              <td>{truncate(feedback?.value)}</td>
              <td>
                <nav className="rw-table-actions">
                  <button
                    href="#"
                    title={'Delete feedback ' + feedback?.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(feedback?.id)}
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

export default RecentGroupFeedback
