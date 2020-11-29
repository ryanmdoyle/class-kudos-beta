import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/PrimaryEnrollmentsCell'

const DELETE_PRIMARY_ENROLLMENT_MUTATION = gql`
  mutation DeletePrimaryEnrollmentMutation($id: String!) {
    deletePrimaryEnrollment(id: $id) {
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

const PrimaryEnrollmentsList = ({ primaryEnrollments }) => {
  const { addMessage } = useFlash()
  const [deletePrimaryEnrollment] = useMutation(
    DELETE_PRIMARY_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        addMessage('PrimaryEnrollment deleted.', {
          classes: 'rw-flash-success',
        })
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Primary group id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {primaryEnrollments.map((primaryEnrollment) => (
            <tr key={primaryEnrollment.id}>
              <td>{truncate(primaryEnrollment.id)}</td>
              <td>{truncate(primaryEnrollment.userId)}</td>
              <td>{truncate(primaryEnrollment.primaryGroupId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scaffoldsPrimaryEnrollment({
                      id: primaryEnrollment.id,
                    })}
                    title={
                      'Show primaryEnrollment ' +
                      primaryEnrollment.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.scaffoldsEditPrimaryEnrollment({
                      id: primaryEnrollment.id,
                    })}
                    title={'Edit primaryEnrollment ' + primaryEnrollment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete primaryEnrollment ' + primaryEnrollment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(primaryEnrollment.id)}
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

export default PrimaryEnrollmentsList
