import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SecondaryEnrollmentForm from 'src/components/Scaffolds/SecondaryEnrollmentForm'

export const QUERY = gql`
  query FIND_SECONDARY_ENROLLMENT_BY_ID($id: String!) {
    secondaryEnrollment: secondaryEnrollment(id: $id) {
      id
      userId
      secondaryGroupId
    }
  }
`
const UPDATE_SECONDARY_ENROLLMENT_MUTATION = gql`
  mutation UpdateSecondaryEnrollmentMutation(
    $id: String!
    $input: UpdateSecondaryEnrollmentInput!
  ) {
    updateSecondaryEnrollment(id: $id, input: $input) {
      id
      userId
      secondaryGroupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ secondaryEnrollment }) => {
  const { addMessage } = useFlash()
  const [updateSecondaryEnrollment, { loading, error }] = useMutation(
    UPDATE_SECONDARY_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsSecondaryEnrollments())
        addMessage('SecondaryEnrollment updated.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onSave = (input, id) => {
    updateSecondaryEnrollment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit SecondaryEnrollment {secondaryEnrollment.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SecondaryEnrollmentForm
          secondaryEnrollment={secondaryEnrollment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
