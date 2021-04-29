import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'
import EnrollmentByEnrollIdForm from 'src/components/EnrollmentByEnrollIdForm/EnrollmentByEnrollIdForm'

import { QUERY } from 'src/components/cells/StudentHomeCell/StudentHomeCell'

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
  const { close } = useModal()
  const [createEnrollment, { loading, error }] = useMutation(
    CREATE_ENROLLMENT_BY_ENROLLID_MUTATION,
    {
      refetchQueries: [{ query: QUERY, variables: { userId } }],
      onCompleted: () => {
        close()
        toast.success('Enrollment created.', { classes: 'rw-flash-success' })
      },
      onError: () => {
        console.error('Unable to find group with the enroll ID as entered.')
      },
    }
  )

  const onSave = (input) => {
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
