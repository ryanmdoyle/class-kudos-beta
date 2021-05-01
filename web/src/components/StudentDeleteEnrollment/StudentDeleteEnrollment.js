import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import { QUERY } from 'src/components/cells/StudentHomeCell/StudentHomeCell'

const DELETE_ENROLLMENT = gql`
  mutation DeleteEnrollment($id: String!) {
    deleteEnrollment(id: $id) {
      id
    }
  }
`

const StudentDeleteEnrollment = ({ enrollmentId, userId }) => {
  const { close } = useModal()

  const [deleteEnrollment, { loading }] = useMutation(DELETE_ENROLLMENT, {
    variables: { id: enrollmentId },
    refetchQueries: [
      {
        query: QUERY,
        variables: { userId: userId },
      },
    ],
    onCompleted: () => {
      toast.success('Added feedback!', { className: 'rw-flash-success' })
    },
    onError: () => {
      toast.error('Oops, there was a problem. Please try again.')
    },
  })

  return (
    <div>
      <div className="pt-2 pb-4 mb-4">
        <p className="font-bold">
          Are you sure you would like to unenroll from this class/group?
        </p>
        <p className="text-gray-600">
          You will still have all points earned for this group after you
          unenroll.
        </p>
      </div>
      <div className="w-full flex justify-between">
        <button className="button-green" onClick={close}>
          No thanks, keep me enrolled.
        </button>
        <button className="button-red" onClick={deleteEnrollment}>
          Yes, Remove Me
        </button>
      </div>
    </div>
  )
}

export default StudentDeleteEnrollment
