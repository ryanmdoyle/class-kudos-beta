import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'

import { useMutation, useQuery } from '@redwoodjs/web'
// import { useApolloClient } from '@apollo/client'
import { toast } from '@redwoodjs/web/toast'
import { QUERY as recentUserFeedbackOfGroupQuery } from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'
import { QUERY as pointsQuery } from 'src/components/cells/UserPointsCell/UserPointsCell'

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

const BehaviorButtons = ({ userId, behaviors, groupId }) => {
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
    ],
    onCompleted: () => {
      toast.success('Added feedback!', { className: 'rw-flash-success' })
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
          loading={loading}
          key={behavior.id}
        />
      ))}
    </>
  )
}

export default BehaviorButtons
