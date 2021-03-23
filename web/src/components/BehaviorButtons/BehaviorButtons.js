import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { QUERY as recentUserFeedbackOfGroupQuery } from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'
import { QUERY as pointsQuery } from 'src/components/cells/UserPointsCell/UserPointsCell'

const CREATE_FEEDBACK = gql`
  mutation CreateFeedback($input: CreateFeedbackInput!) {
    createFeedback(input: $input) {
      id
    }
  }
`

const BehaviorButtons = ({ studentId, behaviors, groupId }) => {
  const [newFeedback, { loading }] = useMutation(CREATE_FEEDBACK, {
    refetchQueries: [
      {
        query: recentUserFeedbackOfGroupQuery,
        variables: { userId: studentId, groupId: groupId },
      },
      { query: pointsQuery, variables: { userId: studentId } },
    ],
    awaitRefetchQueries: true,
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
          studentId={studentId}
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
