import { NavLink, routes } from '@redwoodjs/router'

const TeacherNavLink = ({ id, text }) => {
  if (!id) return null
  return (
    <li className="mb-2 w-full">
      <NavLink
        to={routes.groupList({ groupId: id })}
        className="w-full inline-block text-normal font-body px-4 py-2 rounded-md hover:bg-purple-100"
        activeClassName="bg-purple-100"
      >
        {text}
      </NavLink>
    </li>
  )
}

export default TeacherNavLink
