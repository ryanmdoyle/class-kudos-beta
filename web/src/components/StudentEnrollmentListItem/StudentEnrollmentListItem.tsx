import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import { QUERY } from 'src/components/cells/StudentCell/StudentCell'

const DELETE_ENROLLMENT_MUTATION = gql`
  mutation DeleteEnrollmentMutation($id: String!) {
    deleteEnrollment(id: $id) {
      id
    }
  }
`

const StudentEnrollmentListItem = ({ enrollment, userId, firstName }) => {
  const { openModal } = useModal()

  const [deleteEnrollment, { loading }] = useMutation(
    DELETE_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('User removed.', { classes: 'rw-flash-success' })
      },
      refetchQueries: [{ query: QUERY, variables: { userId: userId } }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = () => {
    const response = prompt(
      `Are you sure you want to remove ${firstName} from ${enrollment.group.name}?\nTo confirm, type: "${enrollment.group.name}" `
    )
    if (response !== null && response !== `${enrollment.group.name}`) {
      alert('Invalid entry, user will not be removed.')
    }
    if (response === `${enrollment.group.name}`) {
      deleteEnrollment({ variables: { id: enrollment.id } })
    }
  }

  return (
    <li
      className={`${
        loading ? 'animate-pulse' : null
      } w-full rounded bg-white shadow p-2 mb-2 flex justify-between items-center`}
      key={userId}
    >
      <span>{`${enrollment?.group.name}`}</span>
      <span className="text-green-400 font-bold flex items-center" title={'Remove ' + enrollment.group.name + '?'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
          className="h-6 w-6 ml-4 stroke-current text-gray-500 hover:text-red-500"
          width="44"
          height="44"
          onClick={() => onDeleteClick()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </span>
    </li>
  )
}

export default StudentEnrollmentListItem
