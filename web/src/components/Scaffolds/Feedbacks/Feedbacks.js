import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/FeedbacksCell'

const DELETE_FEEDBACK_MUTATION = gql`
  mutation DeleteFeedbackMutationInFeedbacks($id: String!) {
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

const FeedbacksList = ({ feedbacks }) => {
  const [deleteFeedback] = useMutation(DELETE_FEEDBACK_MUTATION, {
    onCompleted: () => {
      toast.success('Feedback deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete feedback ' + id + '?')) {
      deleteFeedback({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>User id</th>
            <th>Behavior id</th>
            <th>Group id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.id}>
              <td>{truncate(feedback.id)}</td>
              <td>{timeTag(feedback.createdAt)}</td>
              <td>{truncate(feedback.userId)}</td>
              <td>{truncate(feedback.behaviorId)}</td>
              <td>{truncate(feedback.groupId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scaffoldsFeedback({ id: feedback.id })}
                    title={'Show feedback ' + feedback.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.scaffoldsEditFeedback({ id: feedback.id })}
                    title={'Edit feedback ' + feedback.id}
                    className="rw-button rw-button-small rw-button-green"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete feedback ' + feedback.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(feedback.id)}
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

export default FeedbacksList
