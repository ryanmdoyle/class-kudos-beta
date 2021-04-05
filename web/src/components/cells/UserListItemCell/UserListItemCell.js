/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react'

export const QUERY = gql`
  query UserListItemQuery($userId: String!) {
    totalUserPoints(id: $userId)
  }
`

export const Loading = ({ firstName, lastName }) => (
  <li className="h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2">
    <div className="flex items-center">
      <img
        src="/profile.jpg"
        alt="profile"
        className="h-6 w-6 rounded-full mr-2"
      ></img>
      <span className="text-normal">
        {firstName ? `${firstName} ${lastName}` : 'Anonymous'}
      </span>
    </div>
    <div>
      <span className="justify-self-end text-green-500 font-bold">
        <div className="w-6 h-6 text-purple-100 animate-spin">
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
  firstName,
  lastName,
  totalUserPoints,
  userZero,
  setFirstName,
  setLastName,
  setStudentId,
  totalEmpty,
  setTotalPoints,
}) => {
  useEffect(() => {
    setTotalPoints(totalUserPoints)
  }, [totalUserPoints, setTotalPoints])

  if (userId === userZero && totalEmpty) setTotalPoints(totalUserPoints)

  return (
    <li
      className="h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2"
      onClick={() => {
        setFirstName(firstName)
        setLastName(lastName)
        setStudentId(userId)
        setTotalPoints(totalUserPoints)
      }}
    >
      <div className="flex items-center">
        <img
          src="/profile.jpg"
          alt={`${firstName} ${lastName} profile`}
          className="h-6 w-6 rounded-full mr-2"
        ></img>
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
