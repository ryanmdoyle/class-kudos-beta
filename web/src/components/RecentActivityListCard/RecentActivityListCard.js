import UserActivityOfGroupCell from 'src/components/cells/UserActivityOfGroupCell/UserActivityOfGroupCell'

const RecentActivityListCard = ({ user, groupId, groupName }) => {
  return (
    <div className="bg-white rounded-md shadow mb-4 overflow-y-auto">
      <div className="w-full bg-white sticky top-0 mb-2 pl-4 pt-4">
        <h2 className="font-display text-lg">
          Recent Activity in {groupName} for {user.firstName}
        </h2>
      </div>
      <div className="px-4 pb-2 m-auto">
        <UserActivityOfGroupCell userId={user.id} groupId={groupId} />
      </div>
    </div>
  )
}

export default RecentActivityListCard
