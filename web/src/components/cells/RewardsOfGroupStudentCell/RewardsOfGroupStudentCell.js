import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RewardButton from 'src/components/RewardButton/RewardButton'

import { QUERY as userPointsQuery } from 'src/components/cells/UserPointsCell/UserPointsCell'
import { QUERY as activityQuery } from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'

export const QUERY = gql`
  query RewardsOfGroupStudentQuery($groupId: String!, $userId: String!) {
    rewardsOfGroup(groupId: $groupId) {
      id
      name
      cost
      responseRequired
      responsePrompt
    }
    totalUserPoints(id: $userId)
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

export const beforeQuery = (props) => {
  return { variables: props, pollInterval: 120000 }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({
  totalUserPoints,
  rewardsOfGroup,
  groupId,
  userId,
}) => {
  const [newRedeemed, { loading }] = useMutation(CREATE_REDEEMED, {
    refetchQueries: [
      {
        query: userPointsQuery,
        variables: { userId: userId },
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
          availablePoints={totalUserPoints}
          newRedeemed={newRedeemed}
          sendEmail={sendEmail}
          loading={loading}
        />
      ))}
    </div>
  )
}
