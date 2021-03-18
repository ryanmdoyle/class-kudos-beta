import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import EnrollmentForm from 'src/components/Scaffolds/EnrollmentForm'

export const QUERY = gql`
  query FIND_ENROLLMENT_BY_ID($id: String!) {
    enrollment: enrollment(id: $id) {
      id
      userId
      groupId
    }
  }
`
const UPDATE_ENROLLMENT_MUTATION = gql`
  mutation UpdateEnrollmentMutation(
    $id: String!
    $input: UpdateEnrollmentInput!
  ) {
    updateEnrollment(id: $id, input: $input) {
      id
      userId
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ enrollment }) => {
  const [updateEnrollment, { loading, error }] = useMutation(
    UPDATE_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsEnrollments())
        toast.success('Enrollment updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateEnrollment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Enrollment {enrollment.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EnrollmentForm
          enrollment={enrollment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
