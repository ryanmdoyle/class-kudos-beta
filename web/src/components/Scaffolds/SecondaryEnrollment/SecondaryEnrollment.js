import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/SecondaryEnrollmentsCell'

const DELETE_SECONDARY_ENROLLMENT_MUTATION = gql`
  mutation DeleteSecondaryEnrollmentMutation($id: String!) {
    deleteSecondaryEnrollment(id: $id) {
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

const SecondaryEnrollment = ({ secondaryEnrollment }) => {
  const { addMessage } = useFlash()
  const [deleteSecondaryEnrollment] = useMutation(
    DELETE_SECONDARY_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsSecondaryEnrollments())
        addMessage('SecondaryEnrollment deleted.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete secondaryEnrollment ' + id + '?')
    ) {
      deleteSecondaryEnrollment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SecondaryEnrollment {secondaryEnrollment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{secondaryEnrollment.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{secondaryEnrollment.userId}</td>
            </tr>
            <tr>
              <th>Secondary group id</th>
              <td>{secondaryEnrollment.secondaryGroupId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.scaffoldsEditSecondaryEnrollment({
            id: secondaryEnrollment.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(secondaryEnrollment.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default SecondaryEnrollment
