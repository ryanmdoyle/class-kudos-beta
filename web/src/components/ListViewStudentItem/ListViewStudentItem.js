/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react'

import ProfileImageCircle from 'src/components/ProfileImageCircle/ProfileImageCircle'

const ListViewStudentItem = ({
  user = {},
  currentStudent,
  selecting,
  setFirstName,
  setLastName,
  setStudentId,
  handleSelect,
  setTotalPoints = () => {},
  userZero,
  setUserZeroPoints = () => {},
}) => {
  const { id, firstName, lastName, profileImage, points } = user

  useEffect(() => {
    if (id === userZero) {
      setUserZeroPoints(points)
    } else {
      setTotalPoints(points)
    }
  }, [id, userZero, setUserZeroPoints, points, setTotalPoints])

  const MAX_STRING_LENGTH = 20

  const truncate = (text) => {
    let output = text
    if (text && text.length > MAX_STRING_LENGTH) {
      output = output.substring(0, MAX_STRING_LENGTH) + '...'
    }
    return output
  }

  return (
    <li
      className={`h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2 ${
        currentStudent === id ? 'ring-2' : null
      }`}
      onClick={() => {
        if (!selecting) {
          setFirstName(user.firstName)
          setLastName(user.lastName)
          setStudentId(user.id)
          setTotalPoints(points)
        }
        handleSelect(user.id)
      }}
      key={id}
    >
      <div className="flex items-center">
        <ProfileImageCircle
          firstName={firstName}
          lastName={lastName}
          profileImage={profileImage}
        />

        <span className="text-normal">
          {firstName ? truncate(`${firstName} ${lastName}`) : 'Anonymous'}
        </span>
      </div>
      <div>
        <span className="justify-self-end text-green-500 font-bold">
          {points}
        </span>
      </div>
    </li>
  )
}

export default ListViewStudentItem
