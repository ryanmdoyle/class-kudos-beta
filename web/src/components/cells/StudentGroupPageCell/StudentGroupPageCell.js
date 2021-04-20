import RewardsOfGroupStudentCell from 'src/components/cells/RewardsOfGroupStudentCell/RewardsOfGroupStudentCell'
import UserActivityOfGroupCell from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'
import UserPointsCell from 'src/components/cells/UserPointsCell/UserPointsCell'
import PageLoader from 'src/components/PageLoader/PageLoader'

export const QUERY = gql`
  query UserPointsWrapperQuery($groupId: String!) {
    group(id: $groupId) {
      id
      name
    }
  }
`

export const Loading = () => <PageLoader />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ userId, groupId, group }) => {
  const points = <UserPointsCell userId={userId} />
  return (
    <div className="w-full h-full p-4 relative grid grid-cols-2 grid-rows-6 gap-2">
      {/* Points */}
      <div className="white-box relative col-span-1 row-span-1 p-2">
        <span className="text-6xl text-green-400">{points}</span>
        <span className="text-lg ml-2 text-gray-500 mr-12">
          total {`${points === 1 ? 'point' : 'points' || 'points'}`}
        </span>
      </div>
      {/* Activity */}
      <div className="relative col-span-1 row-span-6">
        <div className="bg-white rounded-md shadow h-full overflow-scroll">
          {/* use custom padding over 'white-box for list to scroll behind header */}
          <div className="w-full bg-white sticky top-0 mb-2 pl-4 pt-4">
            <h2 className="font-display text-2xl">
              Recent Feedback {group.name ? `for ${group.name}` : null}
            </h2>
          </div>
          <div className="px-4">
            <UserActivityOfGroupCell groupId={groupId} userId={userId} />
          </div>
        </div>
      </div>
      {/* Rewards */}
      <div className="white-box h-full p-2 col-span-1 row-span-5">
        <h2 className="font-display text-2xl mb-2">Rewards Available</h2>
        <RewardsOfGroupStudentCell groupId={groupId} userId={userId} />
      </div>
    </div>
  )
}
