import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Scaffolds/SecondaryEnrollmentsCell'

const DELETE_SECONDARY_ENROLLMENT_MUTATION = gql`
  mutation DeleteSecondaryEnrollmentMutation($id: String!) {
    deleteSecondaryEnrollment(id: $id) {
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

const SecondaryEnrollmentsList = ({ secondaryEnrollments }) => {
  const { addMessage } = useFlash()
  const [deleteSecondaryEnrollment] = useMutation(
    DELETE_SECONDARY_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        addMessage('SecondaryEnrollment deleted.', {
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
      confirm('Are you sure you want to delete secondaryEnrollment ' + id + '?')
    ) {
      deleteSecondaryEnrollment({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Secondary group id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {secondaryEnrollments.map((secondaryEnrollment) => (
            <tr key={secondaryEnrollment.id}>
              <td>{truncate(secondaryEnrollment.id)}</td>
              <td>{truncate(secondaryEnrollment.userId)}</td>
              <td>{truncate(secondaryEnrollment.secondaryGroupId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scaffoldsSecondaryEnrollment({
                      id: secondaryEnrollment.id,
                    })}
                    title={
                      'Show secondaryEnrollment ' +
                      secondaryEnrollment.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.scaffoldsEditSecondaryEnrollment({
                      id: secondaryEnrollment.id,
                    })}
                    title={'Edit secondaryEnrollment ' + secondaryEnrollment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={
                      'Delete secondaryEnrollment ' + secondaryEnrollment.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(secondaryEnrollment.id)}
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

export default SecondaryEnrollmentsList
