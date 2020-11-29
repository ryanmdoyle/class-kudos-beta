import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PrimaryEnrollmentForm from 'src/components/Scaffolds/PrimaryEnrollmentForm'

import { QUERY } from 'src/components/Scaffolds/PrimaryEnrollmentsCell'

const CREATE_PRIMARY_ENROLLMENT_MUTATION = gql`
  mutation CreatePrimaryEnrollmentMutation(
    $input: CreatePrimaryEnrollmentInput!
  ) {
    createPrimaryEnrollment(input: $input) {
      id
    }
  }
`

const NewPrimaryEnrollment = () => {
  const { addMessage } = useFlash()
  const [createPrimaryEnrollment, { loading, error }] = useMutation(
    CREATE_PRIMARY_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsPrimaryEnrollments())
        addMessage('PrimaryEnrollment created.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onSave = (input) => {
    createPrimaryEnrollment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New PrimaryEnrollment
        </h2>
      </header>
      <div className="rw-segment-main">
        <PrimaryEnrollmentForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewPrimaryEnrollment
