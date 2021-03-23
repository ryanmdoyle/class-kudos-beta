import RewardsOfGroupStudentCell from 'src/components/cells/RewardsOfGroupStudentCell/RewardsOfGroupStudentCell'
import UserFeedbackOfGroupCell from 'src/components/cells/UserFeedbackOfGroupCell/UserFeedbackOfGroupCell'

export const QUERY = gql`
  query UserPointsWrapperQuery($userId: String!, $groupId: String!) {
    totalUserPoints(id: $userId)
    group(id: $groupId) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ totalUserPoints, userId, groupId, group }) => {
  return (
    <div className="w-full h-full p-4 relative">
      <div className="white-box w-full h-32 mb-4 relative">
        <span className="text-8xl text-green-400">{totalUserPoints}</span>
        <span className="text-lg ml-2 text-gray-500 mr-12">
          total {`${totalUserPoints === 1 ? 'point' : 'points' || 'points'}`}
        </span>
        {/* <span className="text-6xl text-green-400">
            <UserPointsOfGroupCell groupId={groupId} userId={currentUser?.id} />
          </span>
          <span className="text-lg ml-2 text-gray-500">group points</span> */}
      </div>
      <div className="h-5/6 w-full flex relative">
        <div className="white-box w-1/2 h-full p-2 mr-4">
          <h2 className="font-display text-2xl mb-2">
            Recent Feedback {group.name ? `for ${group.name}` : null}
          </h2>
          <UserFeedbackOfGroupCell
            groupId={groupId}
            userId={userId}
            totalPoints={totalUserPoints}
          />
        </div>
        <div className="white-box w-1/2 h-full p-2">
          <h2 className="font-display text-2xl mb-2">Rewards Available</h2>
          <RewardsOfGroupStudentCell
            groupId={groupId}
            userId={userId}
            availablePoints={totalUserPoints}
          />
        </div>
      </div>
    </div>
  )
}
