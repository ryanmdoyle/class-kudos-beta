import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'
// import FeedbackButtonCustom from 'src/components/FeedbackButtonCustom/FeedbackButtonCustom'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import { QUERY as recentUserFeedbackOfGroupQuery } from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'
import { QUERY as studentListQuery } from 'src/components/cells/GroupListCell/GroupListCell'
import { QUERY as groupPointsOfUserQuery } from 'src/components/cells/StudentGroupPointsCell/StudentGroupPointsCell'

const CREATE_FEEDBACK = gql`
  mutation CreateFeedback($createFeedbackInput: CreateFeedbackInput!) {
    createFeedback(input: $createFeedbackInput) {
      id
    }
  }
`

const CREATE_FEEDBACKS = gql`
  mutation CreateFeedbacks($createFeedbacksInput: CreateFeedbacksInput!) {
    createFeedbacks(input: $createFeedbacksInput) {
      id
    }
  }
`

const BehaviorButtons = ({
  behaviors,
  selectedStudents,
  setSelectedStudents,
  isSelectingMultiple,
  setIsSelectingMultiple,
  groupId,
}) => {
  const { isOpen, close } = useModal()

  const [newFeedback, { loading }] = useMutation(CREATE_FEEDBACK, {
    refetchQueries: [
      {
        query: recentUserFeedbackOfGroupQuery,
        variables: { userId: selectedStudents[0]?.id, groupId: groupId },
      },
      { query: studentListQuery, variables: { id: groupId } },
      {
        query: groupPointsOfUserQuery,
        variables: { userId: selectedStudents[0]?.id, groupId: groupId },
      },
    ],
    onCompleted: () => {
      toast.success('Added feedback!', { className: 'rw-flash-success' })
      if (isOpen) close() // close modal for custom values
    },
    onError: () => {
      toast.error('Oops, there was a problem. Please try again.')
    },
  })

  const [newFeedbacks, { loading: loadings }] = useMutation(CREATE_FEEDBACKS, {
    refetchQueries: [
      {
        query: recentUserFeedbackOfGroupQuery,
        variables: { userId: selectedStudents[0]?.id, groupId: groupId },
      },
      { query: studentListQuery, variables: { id: groupId } },
      {
        query: groupPointsOfUserQuery,
        variables: { userId: selectedStudents[0]?.id, groupId: groupId },
      },
    ],
    awaitRefetchQueries: true,
    onCompleted: () => {
      toast.success('Added feedback!', { className: 'rw-flash-success' })
      setIsSelectingMultiple(false)
      if (!isSelectingMultiple) {
        setSelectedStudents([])
      } else setSelectedStudents([selectedStudents[0]])
      if (isOpen) close() // close modal for custom values
    },
    onError: () => {
      toast.error('Oops, there was a problem. Please try again.')
    },
  })

  if (behaviors?.length === 0) {
    return (
      <p className="my-2 text-gray-500">
        No behaviors exists for this group! Create some in the options tab.
      </p>
    )
  }

  return (
    <>
      {behaviors?.map((behavior) => (
        <FeedbackButton
          key={behavior.id}
          behavior={behavior}
          isSelectingMultiple={isSelectingMultiple}
          selectedStudents={selectedStudents}
          groupId={groupId}
          newFeedback={newFeedback}
          loading={loading}
          newFeedbacks={newFeedbacks}
          loadings={loadings}
        />
      ))}
      {/* <FeedbackButtonCustom
        totalUserPoints={totalPoints}
        userGroupPoints={userGroupPoints}
        studentId={selectedStudents[0].id}
        groupId={groupId}
        newFeedback={newFeedback}
        newFeedbacks={newFeedbacks}
        selected={selected}
        selecting={selecting}
        loading={loading}
        loadings={loadings}
        key={'custom'}
      /> */}
    </>
  )
}

export default BehaviorButtons
