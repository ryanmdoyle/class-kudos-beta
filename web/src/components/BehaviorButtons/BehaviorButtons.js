import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'

import { useMutation, useQuery } from '@redwoodjs/web'
// import { useApolloClient } from '@apollo/client'
import { toast } from '@redwoodjs/web/toast'
import { QUERY as recentUserFeedbackOfGroupQuery } from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'
import { QUERY as pointsQuery } from 'src/components/cells/UserPointsCell/UserPointsCell'
import { QUERY as userListItemQuery } from 'src/components/cells/UserListItemCell/UserListItemCell'

const USER_POINTS = gql`
  query FeedbackPointsQuery($userId: String!) {
    totalUserPoints(id: $userId)
  }
`

const CREATE_FEEDBACK = gql`
  mutation CreateFeedback($input: CreateFeedbackInput!) {
    createFeedback(input: $input) {
      id
    }
  }
`

const CREATE_FEEDBACKS = gql`
  mutation CreateFeedbacks($input: [CreateFeedbackInput!]!) {
    createFeedbacks(input: $input) {
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
}) => {
  const { data } = useQuery(USER_POINTS, {
    variables: { userId: userId },
  })
  const totalUserPoints = data?.totalUserPoints

  const [newFeedback, { loading }] = useMutation(CREATE_FEEDBACK, {
    refetchQueries: [
      {
        query: recentUserFeedbackOfGroupQuery,
        variables: { userId: userId, groupId: groupId },
      },
      { query: pointsQuery, variables: { userId: userId } },
      { query: userListItemQuery, variables: { userId: userId } },
    ],
    onCompleted: () => {
      toast.success('Added feedback!', { className: 'rw-flash-success' })
    },
    onError: () => {
      toast.error('Oops, there was a problem. Please try again.')
    },
  })

  const selectedUsersToRefetch = selected.map((user) => ({
    query: userListItemQuery,
    variables: { userId: user },
  }))
  const [newFeedbacks, { loading: loadings }] = useMutation(CREATE_FEEDBACKS, {
    refetchQueries: [
      {
        query: recentUserFeedbackOfGroupQuery,
        variables: { userId: userId, groupId: groupId },
      },
      { query: pointsQuery, variables: { userId: userId } },
      ...selectedUsersToRefetch,
    ],
    awaitRefetchQueries: true,
    onCompleted: () => {
      toast.success('Added feedback!', { className: 'rw-flash-success' })
      setSelected([])
      setSelecting(false)
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
          totalUserPoints={totalUserPoints}
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
        />
      ))}
    </>
  )
}

export default BehaviorButtons
