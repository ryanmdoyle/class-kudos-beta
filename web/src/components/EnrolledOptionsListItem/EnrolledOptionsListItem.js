import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import EditUserCell from 'src/components/cells/EditUserCell'

import { QUERY } from 'src/components/cells/EnrollmentsOfGroupCell/EnrollmentsOfGroupCell'

const DELETE_ENROLLMENT_MUTATION = gql`
  mutation DeleteEnrollmentMutation($id: String!) {
    deleteEnrollment(id: $id) {
      id
    }
  }
`
const EnrolledOptionsListItem = ({ enrollment, groupId }) => {
  const { openModal } = useModal()

  const [deleteEnrollment, { loading }] = useMutation(
    DELETE_ENROLLMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('User removed.', { classes: 'rw-flash-success' })
      },
      refetchQueries: [{ query: QUERY, variables: { groupId: groupId } }],
      awaitRefetchQueries: true,
    }
  )

  const onEditClick = () => {
    openModal(<EditUserCell id={enrollment?.user?.userId} />)
  }

  const onDeleteClick = () => {
    const response = prompt(
      `Are you sure you want to remove ${enrollment?.user?.firstName}?\nTo confirm, type: "${enrollment?.user?.firstName} ${enrollment?.user?.lastName}" `
    )
    if (response !== null && response !== `${enrollment?.user?.firstName} ${enrollment?.user?.lastName}`) {
      alert('Invalid entry, user will not be removed.')
    }
    if (response === `${enrollment?.user?.firstName} ${enrollment?.user?.lastName}`) {
      deleteEnrollment({ variables: { id: enrollment.id } })
    }
  }

  return (
    <li
      className={`${
        loading ? 'animate-pulse' : null
      } w-full rounded bg-white shadow p-2 mb-2 flex justify-between items-center`}
      key={enrollment?.user?.id}
    >
      <span>{`${enrollment?.user?.firstName} ${enrollment?.user?.lastName}`}</span>
      <span className="text-green-400 font-bold flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-4 stroke-current text-gray-500 hover:text-gray-800"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="gray"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => {
            onEditClick()
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
          className="h-6 w-6 ml-4 stroke-current text-gray-500 hover:text-red-500"
          width="44"
          height="44"
          onClick={() => onDeleteClick()}
          title={'Remove ' + enrollment?.user?.firstName + '?'}
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

export default EnrolledOptionsListItem
