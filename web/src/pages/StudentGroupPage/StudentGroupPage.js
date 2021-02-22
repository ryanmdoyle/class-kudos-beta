import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import UserPointsOfGroupCell from 'src/components/cells/UserPointsOfGroupCell/UserPointsOfGroupCell'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import RewardsOfGroupStudentCell from 'src/components/cells/RewardsOfGroupStudentCell/RewardsOfGroupStudentCell'

const StudentGroupPage = ({ groupId }) => {
  const { currentUser } = useAuth()
  return (
    <DashboardLayout>
      <div className="w-full h-full p-4 relative">
        <div className="white-box w-full h-32 mb-4 relative">
          <span className="text-8xl text-green-400">
            <UserPointsOfGroupCell groupId={groupId} userId={currentUser?.id} />
          </span>
          <span className="text-lg ml-2 text-gray-500">points</span>
        </div>
        <div className="h-5/6 w-full flex relative">
          <div className="white-box w-1/2 h-full p-2 mr-4">
            <h2 className="font-display text-2xl">Recent Feedback For Group</h2>
          </div>
          <div className="white-box w-1/2 h-full p-2">
            <h2 className="font-display text-2xl">Rewards Available</h2>
            <RewardsOfGroupStudentCell groupId={groupId} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default StudentGroupPage
