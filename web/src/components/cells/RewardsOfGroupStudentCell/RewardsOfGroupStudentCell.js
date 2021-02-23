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
      behavior {
        id
        value
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ rewardsOfGroup, feedbackOfUser }) => {
  const totalPoints = feedbackOfUser?.reduce((accumulator, currentFeedback) => {
    return accumulator + currentFeedback.behavior.value
  }, 0)
  return (
    <div className="w-full flex flex-wrap justify-center">
      {rewardsOfGroup?.map((reward) => (
        <RewardButton
          reward={reward}
          key={reward?.id}
          totalPoints={totalPoints}
        />
      ))}
    </div>
  )
}
