/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import UserPointsCell from 'src/components/cells/UserPointsCell/UserPointsCell'

const ListViewStudentItem = ({ student = {}, onClick }) => {
  const { id, firstName, lastName } = student
  return (
    <li
      className="h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2"
      onClick={() => {
        onClick()
      }}
    >
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
          <UserPointsCell userId={id} />
        </span>
      </div>
    </li>
  )
}

export default ListViewStudentItem
