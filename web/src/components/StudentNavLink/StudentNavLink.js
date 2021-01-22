import { NavLink, routes } from '@redwoodjs/router'

const StudentNavLink = ({ id, text }) => {
  return (
    <li className="mb-2 w-full">
      <NavLink
        to={routes.studentGroup({ groupId: id })}
        className="w-full inline-block text-normal font-body px-4 py-2 rounded-md"
        activeClassName="bg-purple-100"
      >
        {text}
      </NavLink>
    </li>
  )
}

export default StudentNavLink
