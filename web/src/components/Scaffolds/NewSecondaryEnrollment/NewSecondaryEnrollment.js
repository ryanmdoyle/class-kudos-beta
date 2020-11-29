import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SecondaryEnrollmentForm from 'src/components/Scaffolds/SecondaryEnrollmentForm'

import { QUERY } from 'src/components/Scaffolds/SecondaryEnrollmentsCell'

const CREATE_SECONDARY_ENROLLMENT_MUTATION = gql`
  mutation CreateSecondaryEnrollmentMutation(
    $input: CreateSecondaryEnrollmentInput!
  ) {
    createSecondaryEnrollment(input: $input) {
      id
    }
  }
`

const NewSecondaryEnrollment = () => {
  const { addMessage } = useFlash()
  const [createSecondaryEnrollment, { loading, error }] = useMutation(
    CREATE_SECONDARY_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsSecondaryEnrollments())
        addMessage('SecondaryEnrollment created.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onSave = (input) => {
    createSecondaryEnrollment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New SecondaryEnrollment
        </h2>
      </header>
      <div className="rw-segment-main">
        <SecondaryEnrollmentForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewSecondaryEnrollment
