import { NavLink, routes } from '@redwoodjs/router'

import RedeemedOfGroupToReviewCountCell from 'src/components/cells/RedeemedOfGroupToReviewCountCell'

const TeacherNavLink = ({ id, text }) => {
  if (!id) return null
  return (
    <li className="mb-2 w-full relative">
      <NavLink
        to={routes.groupList({ groupId: id })}
        className="w-full inline-block text-normal font-body px-4 py-2 rounded-md hover:bg-purple-100"
        activeClassName="bg-purple-100"
      >
        {text}
        <RedeemedOfGroupToReviewCountCell groupId={id} />
      </NavLink>
    </li>
  )
}

export default TeacherNavLink
