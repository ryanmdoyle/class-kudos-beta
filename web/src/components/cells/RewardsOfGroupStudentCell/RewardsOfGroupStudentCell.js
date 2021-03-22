import RewardButton from 'src/components/RewardButton/RewardButton'
export const QUERY = gql`
  query RewardsOfGroupStudentQuery($groupId: String!, $userId: String!) {
    rewardsOfGroup(groupId: $groupId) {
      id
      name
      cost
    }
    feedbackOfUser(userId: $userId) {
      id
      value
    }
    redeemedOfUser(userId: $userId) {
      id
      cost
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({
  rewardsOfGroup,
  feedbackOfUser,
  redeemedOfUser,
  groupId,
  userId,
}) => {
  const feedbacks =
    feedbackOfUser?.reduce((accumulator, currentFeedback) => {
      return accumulator + currentFeedback.value
    }, 0) || 0
  const redeemeds =
    redeemedOfUser?.reduce((accumulator, currentRedeemed) => {
      return accumulator + currentRedeemed.cost
    }, 0) || 0
  const available = feedbacks - redeemeds >= 0 ? feedbacks - redeemeds : 0
  return (
    <div className="w-full flex flex-wrap justify-center">
      {rewardsOfGroup?.map((reward) => (
        <RewardButton
          key={reward?.id}
          reward={reward}
          groupId={groupId}
          userId={userId}
          availablePoints={available}
        />
      ))}
    </div>
  )
}
