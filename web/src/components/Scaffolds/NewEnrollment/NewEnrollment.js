import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import EnrollmentForm from 'src/components/Scaffolds/EnrollmentForm'

import { QUERY } from 'src/components/Scaffolds/EnrollmentsCell'

const CREATE_ENROLLMENT_MUTATION = gql`
  mutation CreateEnrollmentMutation($input: CreateEnrollmentInput!) {
    createEnrollment(input: $input) {
      id
    }
  }
`

const NewEnrollment = () => {
  const { addMessage } = useFlash()
  const [createEnrollment, { loading, error }] = useMutation(
    CREATE_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsEnrollments())
        addMessage('Enrollment created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createEnrollment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Enrollment</h2>
      </header>
      <div className="rw-segment-main">
        <EnrollmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEnrollment
