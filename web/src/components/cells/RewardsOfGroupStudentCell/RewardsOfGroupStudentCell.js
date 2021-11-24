import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RewardButton from 'src/components/RewardButton/RewardButton'

import { QUERY as totalPointsQuery } from 'src/components/cells/UserPointsCell/UserPointsCell'
import { QUERY as groupPointsQuery } from 'src/components/cells/StudentGroupPointValueCell/StudentGroupPointValueCell'
import { QUERY as activityQuery } from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'

export const QUERY = gql`
  query RewardsOfGroupStudentQuery($groupId: String!) {
    rewardsOfGroup(groupId: $groupId) {
      id
      name
      cost
      responseRequired
      responsePrompt
    }
  }
`

const CREATE_REDEEMED = gql`
  mutation CreateRedeemed($input: CreateRedeemedInput!) {
    createRedeemed(input: $input) {
      id
    }
  }
`

const SEND_REDEEMED_NOTIFICATION_EMAIL = gql`
  mutation sendRedeemedNotification($input: RedeemedNotification!) {
    sendRedeemedNotification(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="flex flex-col items-center">
    <p className="text-gray-700">
      Hmm...Doesn&apos;t look like there are any rewards for you yet...
    </p>
    <p className="text-gray-700">(Your teacher can make some)</p>
    <img
      src="/huh.gif"
      alt="gif of person confused"
      className="h-48 w-48 rounded-full my-8"
    ></img>
  </div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({
  rewardsOfGroup,
  groupId,
  userId,
  totalPoints,
  groupPoints,
}) => {
  const [newRedeemed, { loading }] = useMutation(CREATE_REDEEMED, {
    refetchQueries: [
      {
        query: totalPointsQuery,
        variables: { userId: userId },
      },
      {
        query: groupPointsQuery,
        variables: { userId: userId, groupId: groupId },
      },
      {
        query: activityQuery,
        variables: { userId: userId, groupId: groupId },
      },
    ],
    awaitRefetchQueries: true,
    onCompleted: () => {
      toast.success(`Redeemed!`, {
        className: 'rw-flash-success',
      })
    },
    onError: (error) => {
      toast.error(`${error}`)
    },
  })

  const [sendEmail] = useMutation(SEND_REDEEMED_NOTIFICATION_EMAIL, {
    onError: () => {
      toast.error(`Failed to send notificaton email to instructor.`)
    },
  })

  return (
    <div className="w-full flex flex-wrap justify-center">
      {rewardsOfGroup?.map((reward) => (
        <RewardButton
          key={reward?.id}
          reward={reward}
          groupId={groupId}
          userId={userId}
          totalPoints={totalPoints}
          groupPoints={groupPoints}
          newRedeemed={newRedeemed}
          sendEmail={sendEmail}
          loading={loading}
        />
      ))}
    </div>
  )
}
