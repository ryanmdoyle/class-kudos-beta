import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import { QUERY } from 'src/components/cells/StudentHomeCell/StudentHomeCell'

const DELETE_ENROLLMENT = gql`
  mutation DeleteEnrollment($userId: String!, $groupId: String!) {
    deleteEnrollmentByStudent(userId: $userId, groupId: $groupId) {
      id
    }
  }
`

const StudentDeleteEnrollment = ({ groupId, userId }) => {
  const { close } = useModal()

  const [deleteEnrollmentByStudent, { loading }] = useMutation(
    DELETE_ENROLLMENT,
    {
      variables: { userId: userId, groupId: groupId },
      refetchQueries: [
        {
          query: QUERY,
          variables: { userId: userId },
        },
      ],
      onCompleted: () => {
        toast.success('Successfully Unenrolled!', {
          className: 'rw-flash-success',
        })
        close()
      },
      onError: () => {
        toast.error('Oops, there was a problem. Please try again.')
      },
    }
  )

  return (
    <div>
      <div className="pt-2 pb-4 mb-4">
        <p className="font-bold">
          Are you sure you would like to unenroll from this class/group?
        </p>
        <p className="text-gray-600">
          You will still have all kudos earned for this group after you
          unenroll.
        </p>
      </div>
      <div className="w-full flex justify-between">
        <button className="button-green" onClick={close}>
          No thanks, keep me enrolled.
        </button>
        <button className="button-red" onClick={deleteEnrollmentByStudent}>
          Yes, Remove Me
        </button>
      </div>
    </div>
  )
}

export default StudentDeleteEnrollment
