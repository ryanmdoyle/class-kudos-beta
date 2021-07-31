import { navigate, routes } from '@redwoodjs/router'
import { useModal } from 'src/context/ModalContext'

import EditGroupCell from 'src/components/cells/EditGroupCell'

const GroupCard = ({
  id,
  name,
  description,
  studentCount,
  enrollId,
  userId,
}) => {
  const { openModal } = useModal()

  const cardClick = (e) => {
    if (e.target.dataset.clickElement === 'settings') {
      openModal(<EditGroupCell id={id} userId={userId} />)
    } else if (e.target.dataset.clickElement !== 'enrollId' && e.target.dataset.clickElement !== 'settings') {
      navigate(routes.groupList({ groupId: id }))
    }
  }

  return (
    <div
      className="w-100 h-24 white-box hover:shadow flex justify-between items-center mb-4 cursor-pointer"
      onClick={cardClick}
    >
      <div className="flex items-center">
        <div>
          <h2 className="text-xl font-display">{name}</h2>
          <span className="text-gray-500 text-sm">{description}</span>
          {enrollId && (
            <span data-click-element="enrollId">
              <br></br>
              <span className="text-gray-500 text-sm" data-click-element="enrollId">Enroll ID: </span>
              <span
                className="text-gray-500 text-sm font-mono"
                data-click-element="enrollId"
                id="enrollId"
                value={enrollId}
              >
                {enrollId}
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 mb-2">
          {studentCount
            ? studentCount > 1
              ? `${studentCount} students`
              : `${studentCount} student`
            : 'No Students'}
        </span>
        <svg
          className="w-8 h-t stroke-current stroke-2 text-gray-400 hover:text-purple-800 self-end"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-click-element="settings"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
            data-click-element="settings"
          />
          <path
            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
            data-click-element="settings"
          />
          <circle cx="12" cy="12" r="3" data-click-element="settings"/>
        </svg>
      </div>
    </div>
  )
}

export default GroupCard
