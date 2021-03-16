import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import GroupsOwnedCell from '../cells/GroupsOwnedCell/GroupsOwnedCell'

const TeacherNav = () => {
  const { currentUser } = useAuth()
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <div
        className="w-full h-8 mb-2 flex justify-center align-items rounded-md p-1 cursor-pointer hover:bg-purple-100"
        onClick={() => {
          navigate(routes.teacherHome())
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          // className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="text-lg font-display ml-2">Home</span>
      </div>
      <GroupsOwnedCell userId={currentUser?.id} />
    </div>
  )
}

export default TeacherNav
