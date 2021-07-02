import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/EnrollmentsCell'

const DELETE_ENROLLMENT_MUTATION = gql`
  mutation DeleteEnrollmentMutation($id: String!) {
    deleteEnrollment(id: $id) {
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

const EnrollmentsList = ({ enrollments }) => {
  const [deleteEnrollment] = useMutation(DELETE_ENROLLMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Enrollment deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete enrollment ' + id + '?')) {
      deleteEnrollment({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Group id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enrollment) => (
            <tr key={enrollment.id}>
              <td>{truncate(enrollment.id)}</td>
              <td>{truncate(enrollment.userId)}</td>
              <td>{truncate(enrollment.groupId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scaffoldsEnrollment({ id: enrollment.id })}
                    title={'Show enrollment ' + enrollment.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.scaffoldsEditEnrollment({ id: enrollment.id })}
                    title={'Edit enrollment ' + enrollment.id}
                    className="rw-button rw-button-small rw-button-green"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete enrollment ' + enrollment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(enrollment.id)}
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

export default EnrollmentsList
