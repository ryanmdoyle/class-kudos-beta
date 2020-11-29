import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PrimaryEnrollmentForm from 'src/components/Scaffolds/PrimaryEnrollmentForm'

export const QUERY = gql`
  query FIND_PRIMARY_ENROLLMENT_BY_ID($id: String!) {
    primaryEnrollment: primaryEnrollment(id: $id) {
      id
      userId
      primaryGroupId
    }
  }
`
const UPDATE_PRIMARY_ENROLLMENT_MUTATION = gql`
  mutation UpdatePrimaryEnrollmentMutation(
    $id: String!
    $input: UpdatePrimaryEnrollmentInput!
  ) {
    updatePrimaryEnrollment(id: $id, input: $input) {
      id
      userId
      primaryGroupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ primaryEnrollment }) => {
  const { addMessage } = useFlash()
  const [updatePrimaryEnrollment, { loading, error }] = useMutation(
    UPDATE_PRIMARY_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsPrimaryEnrollments())
        addMessage('PrimaryEnrollment updated.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onSave = (input, id) => {
    updatePrimaryEnrollment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PrimaryEnrollment {primaryEnrollment.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PrimaryEnrollmentForm
          primaryEnrollment={primaryEnrollment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
