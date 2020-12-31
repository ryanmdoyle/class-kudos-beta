import { Link, routes } from '@redwoodjs/router'

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
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const RecentGroupFeedback = ({ feedbacksOfGroup }) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
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
          {feedbacksOfGroup.map((feedback) => (
            <tr key={feedback.id}>
              <td>
                {truncate(
                  `${feedback.user.firstName} ${feedback.user.lastName}`
                )}
              </td>
              <td>{truncate(feedback.behavior.name)}</td>
              <td>{timeTag(feedback.createdAt)}</td>
              <td>{truncate(feedback.behavior.value)}</td>
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
                    className="rw-button rw-button-small rw-button-blue"
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

export default RecentGroupFeedback
