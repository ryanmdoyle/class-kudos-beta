import type { FindAllEnrolledQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useModal } from 'src/context/ModalContext'

import EditUserCell from 'src/components/cells/EditUserCell'
import StudentPageLink from 'src/components/StudentPageLink'

import truncate from 'src/lib/truncate'

export const QUERY = gql`
  query FindAllEnrolledQuery($userId: String!) {
    enrollmentsOfInstructor: enrollmentsOfInstructor(userId: $userId) {
      id
      user {
        id
        firstName
        lastName
        points
        enrollments {
          id
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  enrollmentsOfInstructor,
}: CellSuccessProps<FindAllEnrolledQuery>) => {
  const { openModal } = useModal()

  const sorted = enrollmentsOfInstructor.slice().sort((a, b) => {
    const nameA = a?.user?.firstName?.toLowerCase()
    const nameB = b?.user?.firstName?.toLowerCase()
    return nameA < nameB ? -1 : 1
  })

  const onEditClick = (userId) => {
    openModal(<EditUserCell id={userId} />)
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive overflow-y-scroll">
      <table className="rw-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Kudos</th>
            <th>Enrollments</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {sorted?.map((enrolled) => (
            <tr key={enrolled?.id}>
              <td>
                <StudentPageLink
                  userId={enrolled?.user.id}
                  text={`${enrolled?.user.firstName} ${enrolled?.user.lastName}`}
                />
              </td>
              <td>{truncate(enrolled?.user.points)}</td>
              <td>{truncate(enrolled?.user.enrollments.length)}</td>
              <td>{truncate(enrolled?.value)}</td>
              <td>
                <nav className="rw-table-actions">
                  <button
                    title={'Edit ' + enrolled?.user.firstName + enrolled?.id}
                    className="rw-button rw-button-small rw-button-green"
                    onClick={() => onEditClick(enrolled?.user.id)}
                  >
                    Edit User
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
