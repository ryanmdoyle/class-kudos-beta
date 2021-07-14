import RewardsOfGroupStudentCell from 'src/components/cells/RewardsOfGroupStudentCell/RewardsOfGroupStudentCell'
import UserActivityOfGroupCell from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'
import PageLoader from 'src/components/PageLoader/PageLoader'

export const QUERY = gql`
  query UserPointsWrapperQuery($groupId: String!, $userId: String!) {
    group(id: $groupId) {
      id
      name
    }
    user(id: $userId) {
      id
      points
    }
    groupPointsOfUser(groupId: $groupId, userId: $userId) {
      id
      points
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, pollInterval: 60000 }
}

export const Loading = () => <PageLoader />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ userId, groupId, group, user, groupPointsOfUser }) => {
  return (
    <div className="w-full h-full p-4 relative grid grid-cols-2 grid-rows-6 gap-2">
      <div className='col-span-1 row-span-6 flex flex-col'>
        {/* Points */}
        <div className='flex w-full justify-between'>
          <div className="h-32 w-1/2 white-box relative p-2 mb-4 flex items-center mr-2">
            {/* GROUP Points */}
            <div className='flex flex-col items-center w-full'>
              <span className="text-5xl text-green">{groupPointsOfUser.points}</span>
              <span className="text-lg text-green">
                {group.name} {`${groupPointsOfUser.points === 1 ? 'kudo' : 'kudos' || 'kudos'}`}
              </span>
            </div>
          </div>
          <div className="h-32 w-1/2 white-box relative p-2 mb-4 flex items-center ml-2">
            {/* TOTAL */}
            <div className='flex flex-col items-center w-full'>
              <span className="text-5xl text-gray-400">{user.points}</span>
              <span className="text-lg text-gray-500">
                total {`${user.points === 1 ? 'kudo' : 'kudos' || 'kudos'}`}
              </span>
            </div>
          </div>
        </div>
        <div className="h-full white-box relative p-2 flex items-center flex flex-col">
          {/* Rewards */}
          <h2 className="font-display text-2xl mb-2 p-2">Rewards Available</h2>
          <RewardsOfGroupStudentCell
            groupId={groupId}
            userId={userId}
            availablePoints={user.points}
          />
        </div>
      </div>
      {/* Activity */}
      <div className="relative col-span-1 row-span-6">
        <div className="bg-white rounded-md shadow h-full overflow-y-scroll">
          {/* use custom padding over 'white-box for list to scroll behind header */}
          <div className="w-full bg-white sticky top-0 mb-2 pl-4 pt-4">
            <h2 className="font-display text-2xl">
              Recent Feedback {group?.name ? `in ${group.name}` : null}
            </h2>
          </div>
          <div className="px-4">
            <UserActivityOfGroupCell groupId={groupId} userId={userId} />
          </div>
        </div>
      </div>
    </div>
  )
}


// {/* Points */}
// <div className="h-32 white-box relative p-2 mb-4 flex items-center">
// <div className="w-full px-4 flex justify-between xl:justify-around">
//   {/* GROUP Points */}
//   <div>
//     <span className="text-7xl text-green">{groupPointsOfUser.points}</span>
//     <span className="text-lg ml-2 text-green self-end">
//       {group.name} {`${groupPointsOfUser.points === 1 ? 'kudo' : 'kudos' || 'kudos'}`}
//     </span>
//   </div>
//   {/* TOTAL */}
//   <div className='flex items-end'>
//     <span className="text-6xl text-gray-400">{user.points}</span>
//     <span className="ml-2 text-gray-500 self-end">
//       total {`${user.points === 1 ? 'kudo' : 'kudos' || 'kudos'}`}
//     </span>
//   </div>
// </div>
// </div>
// {/* Rewards */}
// <div className="white-box p-2 h-full">
// <h2 className="font-display text-2xl mb-2 p-2">Rewards Available</h2>
// <RewardsOfGroupStudentCell
//   groupId={groupId}
//   userId={userId}
//   availablePoints={user.points}
// />
// </div>
