import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import EnrollmentByEnrollIdForm from 'src/components/EnrollmentByEnrollIdForm/EnrollmentByEnrollIdForm'

const CREATE_ENROLLMENT_BY_ENROLLID_MUTATION = gql`
  mutation CreateEnrollmentByEnrollIdMutation(
    $input: CreateEnrollmentByEnrollIdInput!
  ) {
    createEnrollmentByEnrollId(input: $input) {
      id
    }
  }
`

const NewEnrollment = ({ userId }) => {
  const { addMessage } = useFlash()
  const [createEnrollment, { loading, error }] = useMutation(
    CREATE_ENROLLMENT_BY_ENROLLID_MUTATION,
    {
      onCompleted: () => {
        addMessage('Enrollment created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    console.log('onSave input', input, userId)
    input.userId = userId
    createEnrollment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Enroll in Class/Group
        </h2>
      </header>
      <div className="rw-segment-main">
        <EnrollmentByEnrollIdForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewEnrollment
