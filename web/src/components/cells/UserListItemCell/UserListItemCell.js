/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react'

import ProfileImageCircle from 'src/components/ProfileImageCircle/ProfileImageCircle'

export const QUERY = gql`
  query UserListItemQuery($userId: String!) {
    totalUserPoints(id: $userId)
    user(id: $userId) {
      profileImage
    }
  }
`

export const Loading = ({ firstName, lastName }) => (
  <li className="h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2">
    <div className="flex items-center">
      <div className="h-8 w-8 rounded-full mr-2 bg-gray-100"></div>
      <span className="text-normal">
        {firstName ? `${firstName} ${lastName}` : 'Anonymous'}
      </span>
    </div>
    <div>
      <span className="justify-self-end text-green-500 font-bold">
        <div className="w-8 h-8 text-purple-100 animate-spin">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="12"
            strokeDasharray="175"
            strokeLinecap="round"
          >
            <circle cx="50" cy="50" r="35" />
          </svg>
        </div>
      </span>
    </div>
  </li>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({
  userId,
  // groupId, auto-import for query
  user,
  firstName,
  lastName,
  totalUserPoints,
  userZero,
  setFirstName,
  setLastName,
  setStudentId,
  totalEmpty,
  setTotalPoints,
  selecting,
  handleSelect,
}) => {
  useEffect(() => {
    setTotalPoints(totalUserPoints)
  }, [totalUserPoints, setTotalPoints])

  if (userId === userZero && totalEmpty) setTotalPoints(totalUserPoints)

  const profileImage = user?.profileImage
  return (
    <li
      className="h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2"
      onClick={() => {
        if (!selecting) {
          setFirstName(firstName)
          setLastName(lastName)
          setStudentId(userId)
          setTotalPoints(totalUserPoints)
        }
        handleSelect(userId)
      }}
    >
      <div className="flex items-center">
        <ProfileImageCircle
          firstName={firstName}
          lastName={lastName}
          profileImage={profileImage}
        />

        <span className="text-normal">
          {firstName ? `${firstName} ${lastName}` : 'Anonymous'}
        </span>
      </div>
      <div>
        <span className="justify-self-end text-green-500 font-bold">
          {totalUserPoints}
        </span>
      </div>
    </li>
  )
}
