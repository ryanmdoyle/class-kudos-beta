import RewardButton from 'src/components/RewardButton/RewardButton'
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({
  totalUserPoints,
  rewardsOfGroup,
  groupId,
  userId,
}) => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      {rewardsOfGroup?.map((reward) => (
        <RewardButton
          key={reward?.id}
          reward={reward}
          groupId={groupId}
          userId={userId}
          availablePoints={totalUserPoints}
        />
      ))}
    </div>
  )
}
