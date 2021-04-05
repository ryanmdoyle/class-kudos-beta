import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/cells/GroupFeedbackCell/GroupFeedbackCell'

const DELETE_FEEDBACK_MUTATION = gql`
  mutation DeleteFeedbackMutation($id: String!) {
    deleteFeedback(id: $id) {
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

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleTimeString()} on{' '}
      {new Date(datetime).toLocaleDateString()}
    </time>
  )
}

const RecentGroupFeedback = ({ feedbacksOfGroup, groupId }) => {
  const [deleteFeedback] = useMutation(DELETE_FEEDBACK_MUTATION, {
    onCompleted: () => {
      toast.success('Feedback deleted.', { classes: 'rw-flash-success' })
    },
    refetchQueries: [{ query: QUERY, variables: { groupId } }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete feedback ' + id + '?')) {
      deleteFeedback({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive h-sub-full overflow-y-scroll">
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
