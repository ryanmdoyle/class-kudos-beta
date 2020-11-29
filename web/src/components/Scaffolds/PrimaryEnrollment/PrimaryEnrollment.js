import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/PrimaryEnrollmentsCell'

const DELETE_PRIMARY_ENROLLMENT_MUTATION = gql`
  mutation DeletePrimaryEnrollmentMutation($id: String!) {
    deletePrimaryEnrollment(id: $id) {
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

const PrimaryEnrollment = ({ primaryEnrollment }) => {
  const { addMessage } = useFlash()
  const [deletePrimaryEnrollment] = useMutation(
    DELETE_PRIMARY_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsPrimaryEnrollments())
        addMessage('PrimaryEnrollment deleted.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete primaryEnrollment ' + id + '?')
    ) {
      deletePrimaryEnrollment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PrimaryEnrollment {primaryEnrollment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{primaryEnrollment.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{primaryEnrollment.userId}</td>
            </tr>
            <tr>
              <th>Primary group id</th>
              <td>{primaryEnrollment.primaryGroupId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.scaffoldsEditPrimaryEnrollment({
            id: primaryEnrollment.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(primaryEnrollment.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default PrimaryEnrollment
