import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RewardButton from 'src/components/RewardButton/RewardButton'

import { QUERY as userPointsQuery } from 'src/components/cells/UserPointsCell/UserPointsCell'
import { QUERY as activityQuery } from 'src/components/cells/UserFeedbackOfGroupCell/UserFeedbackOfGroupCell'

export const QUERY = gql`
  query RewardsOfGroupStudentQuery($groupId: String!, $userId: String!) {
    rewardsOfGroup(groupId: $groupId) {
      id
      name
      cost
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
          loading={loading}
        />
      ))}
    </div>
  )
}
