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
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({
  rewardsOfGroup,
  feedbackOfUser,
  groupId,
  userId,
}) => {
  const totalPoints = feedbackOfUser?.reduce((accumulator, currentFeedback) => {
    return accumulator + currentFeedback.value
  }, 0)
  return (
    <div className="w-full flex flex-wrap justify-center">
      {rewardsOfGroup?.map((reward) => (
        <RewardButton
          key={reward?.id}
          reward={reward}
          groupId={groupId}
          userId={userId}
          totalPoints={totalPoints}
        />
      ))}
    </div>
  )
}
