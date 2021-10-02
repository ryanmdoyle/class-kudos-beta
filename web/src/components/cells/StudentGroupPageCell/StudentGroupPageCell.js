import { MetaTags } from '@redwoodjs/web'
import RewardsOfGroupStudentCell from 'src/components/cells/RewardsOfGroupStudentCell/RewardsOfGroupStudentCell'
import UserActivityOfGroupCell from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'
import GroupPointsOfGroupCell from 'src/components/cells/GroupPointsOfGroupCell/GroupPointsOfGroupCell'
import PageLoader from 'src/components/PageLoader/PageLoader'

export const QUERY = gql`
  query StudentGroupPageQuery($groupId: String!, $userId: String!) {
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

export const Success = ({
  userId,
  groupId,
  group,
  user,
  groupPointsOfUser,
}) => {
  return (
    <>
      <MetaTags
        title={`Class Kudos - ${group?.name}`}
        description={`Student view for ${group?.name}`}
      />
      <div className="w-full h-full p-4 relative grid grid-cols-2 grid-rows-6 gap-2">
        <div className="col-span-1 row-span-6 flex flex-col">
          {/* Points */}
          <div className="flex w-full justify-between">
            <div className="h-32 w-1/3 white-box relative p-2 mb-4 flex items-center mr-2">
              {/* GROUP Points */}
              <div className="flex flex-col items-center w-full">
                <span className="text-4xl text-green">
                  {groupPointsOfUser?.points}
                </span>
                <span className="text-base text-green text-center">
                  {group?.name}{' '}
                  {`${
                    groupPointsOfUser?.points === 1
                      ? 'Kudo'
                      : 'Kudos' || 'Kudos'
                  }`}
                </span>
              </div>
            </div>
            <div className="h-32 w-1/3 white-box relative p-2 mb-4 flex items-center ml-2">
              {/* TOTAL */}
              <div className="flex flex-col items-center w-full">
                <span className="text-4xl text-gray-400">{user?.points}</span>
                <span className="text-base text-gray-500 text-center">
                  Total Kudos
                </span>
              </div>
            </div>
            <div className="h-32 w-1/3 white-box relative p-2 mb-4 flex items-center ml-2">
              {/* TOTAL OF GROUP*/}
              <div className="flex flex-col items-center w-full">
                <span className="text-4xl text-gray-400">
                  <GroupPointsOfGroupCell groupId={groupId} />
                </span>
                <span className="text-base text-gray-500 text-center">
                  Earned in {group?.name}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow h-full overflow-y-auto">
            {/* use custom padding over 'white-box for list to scroll behind header */}
            <div className="w-full bg-white sticky top-0 mb-2 pl-4 pt-4 z-10">
              <h2 className="font-display text-2xl z-10">Rewards Available</h2>
            </div>
            <div className="px-4 z-0">
              <RewardsOfGroupStudentCell
                groupId={groupId}
                userId={userId}
                totalPoints={user?.points}
                groupPoints={groupPointsOfUser?.points}
              />
            </div>
          </div>
        </div>
        {/* Activity */}
        <div className="relative col-span-1 row-span-6">
          <div className="bg-white rounded-md shadow h-full overflow-y-auto">
            {/* use custom padding over 'white-box for list to scroll behind header */}
            <div className="w-full bg-white sticky top-0 mb-2 pl-4 pt-4 z-10">
              <h2 className="font-display text-2xl">
                Recent Feedback {group?.name ? `in ${group.name}` : null}
              </h2>
            </div>
            <div className="px-4 z-0">
              <UserActivityOfGroupCell groupId={groupId} userId={userId} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
