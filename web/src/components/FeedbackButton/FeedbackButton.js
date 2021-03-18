import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { QUERY as recentUserFeedbackOfGroupQuery } from 'src/components/cells/UserFeedbackOfGroupCell/UserFeedbackOfGroupCell'
import { QUERY as pointsQuery } from 'src/components/cells/UserPointsCell/UserPointsCell'

const CREATE_FEEDBACK = gql`
  mutation CreateFeedback($input: CreateFeedbackInput!) {
    createFeedback(input: $input) {
      id
    }
  }
`

const FeedbackButton = ({ name, value, studentId, behaviorId, groupId }) => {
  const [newFeedback, { loading, error }] = useMutation(CREATE_FEEDBACK, {
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
  })

  const giveFeedback = () => {
    newFeedback({
      variables: {
        input: {
          userId: studentId,
          behaviorId: behaviorId,
          groupId: groupId,
          name: name,
          value: value,
        },
      },
    })
  }

  return (
    <div
      className="h-24 w-36 white-box m-1 overflow-hidden flex flex-col justify-center items-center hover:ring-2 ring-purple-500"
      onClick={() => {
        if (!loading) {
          giveFeedback()
        }
      }}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-award"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={loading ? 'gray' : 'currentColor'}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="9" r="6" />
          <polyline
            points="9 14.2 9 21 12 19 15 21 15 14.2"
            transform="rotate(-30 12 9)"
          />
          <polyline
            points="9 14.2 9 21 12 19 15 21 15 14.2"
            transform="rotate(30 12 9)"
          />
        </svg>
      </span>
      <span className="text-gray-500 text-center text-sm">{name}</span>
      <span
        className={`${
          value > 0 ? 'text-green-500' : 'text-red-500'
        } font-bold text-center text-sm`}
      >
        {value}
      </span>
    </div>
  )
}

export default FeedbackButton
