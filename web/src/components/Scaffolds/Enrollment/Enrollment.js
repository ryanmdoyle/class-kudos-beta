import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/EnrollmentsCell'

const DELETE_ENROLLMENT_MUTATION = gql`
  mutation DeleteEnrollmentMutation($id: String!) {
    deleteEnrollment(id: $id) {
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

const Enrollment = ({ enrollment }) => {
  const [deleteEnrollment] = useMutation(DELETE_ENROLLMENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.scaffoldsEnrollments())
      toast.success('Enrollment deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete enrollment ' + id + '?')) {
      deleteEnrollment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Enrollment {enrollment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{enrollment.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{enrollment.userId}</td>
            </tr>
            <tr>
              <th>Group id</th>
              <td>{enrollment.groupId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.scaffoldsEditEnrollment({ id: enrollment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(enrollment.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Enrollment
