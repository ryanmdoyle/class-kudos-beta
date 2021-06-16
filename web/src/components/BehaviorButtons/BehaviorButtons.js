import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'
import FeedbackButtonCustom from 'src/components/FeedbackButtonCustom/FeedbackButtonCustom'

import { useMutation, useQuery } from '@redwoodjs/web'
// import { useApolloClient } from '@apollo/client'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import { QUERY as recentUserFeedbackOfGroupQuery } from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'
// import { QUERY as pointsQuery } from 'src/components/cells/UserPointsCell/UserPointsCell'
// import { QUERY as userListItemQuery } from 'src/components/cells/UserListItemCell/UserListItemCell'
import { QUERY as studentListQuery } from 'src/components/cells/GroupListCell/GroupListCell'

// const USER_POINTS = gql`
//   query FeedbackPointsQuery($userId: String!) {
//     user(id: $userId) {
//       id
//       points
//     }
//   }
// `

const CREATE_FEEDBACK = gql`
  mutation CreateFeedback(
    $userId: String!
    $createFeedbackInput: CreateFeedbackInput!
    $updateUserInput: UpdateUserInput!
  ) {
    createFeedback(input: $createFeedbackInput) {
      id
    }
    updateUser(id: $userId, input: $updateUserInput) {
      id
      points
    }
  }
`

const CREATE_FEEDBACKS = gql`
  mutation CreateFeedbacks(
    $feedbackInput: [CreateFeedbackInput!]!
    $usersInput: [UpdateUsersPointsInput!]!
  ) {
    createFeedbacks(input: $feedbackInput) {
      id
    }
    updateUsersPoints(input: $usersInput) {
      id
    }
  }
`

const BehaviorButtons = ({
  userId,
  behaviors,
  groupId,
  selected,
  selecting,
  setSelecting,
  setSelected,
  totalPoints,
  setCurrentStudent,
}) => {
  const { isOpen, close } = useModal()

  const [newFeedback, { loading }] = useMutation(CREATE_FEEDBACK, {
    refetchQueries: [
      {
        query: recentUserFeedbackOfGroupQuery,
        variables: { userId: userId, groupId: groupId },
      },
      { query: studentListQuery, variables: { id: groupId } },
    ],
    onCompleted: () => {
      toast.success('Added feedback!', { className: 'rw-flash-success' })
      if (isOpen) close()
    },
    onError: () => {
      toast.error('Oops, there was a problem. Please try again.')
    },
  })

  // const selectedUsersToRefetch = selected?.map((user) => ({
  //   query: userListItemQuery,
  //   variables: { userId: user },
  // }))

  const [newFeedbacks, { loading: loadings }] = useMutation(CREATE_FEEDBACKS, {
    refetchQueries: [
      {
        query: recentUserFeedbackOfGroupQuery,
        variables: { userId: userId, groupId: groupId },
      },
      // { query: pointsQuery, variables: { userId: userId } },
      { query: studentListQuery, variables: { id: groupId } },
      // ...selectedUsersToRefetch,
    ],
    awaitRefetchQueries: true,
    onCompleted: () => {
      toast.success('Added feedback!', { className: 'rw-flash-success' })
      setSelecting(false)
      setSelected([])
      if (!selecting) {
        setCurrentStudent(null)
      } else setCurrentStudent(userId)
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
          name={behavior.name}
          value={behavior.value}
          totalUserPoints={totalPoints}
          studentId={userId}
          behaviorId={behavior.id}
          groupId={groupId}
          newFeedback={newFeedback}
          newFeedbacks={newFeedbacks}
          selected={selected}
          selecting={selecting}
          loading={loading}
          loadings={loadings}
          key={behavior.id}
          setCurrentStudent={setCurrentStudent}
          setSelecting={setSelecting}
          setSelected={setSelected}
        />
      ))}
      <FeedbackButtonCustom
        totalUserPoints={totalPoints}
        studentId={userId}
        groupId={groupId}
        newFeedback={newFeedback}
        newFeedbacks={newFeedbacks}
        selected={selected}
        selecting={selecting}
        loading={loading}
        loadings={loadings}
        key={'custom'}
      />
    </>
  )
}

export default BehaviorButtons
