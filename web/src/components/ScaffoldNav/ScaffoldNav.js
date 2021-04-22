/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { NavLink, routes } from '@redwoodjs/router'

const ScaffoldNav = () => {
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <>
        <span className="text-lg font-display mb-2 mt-2">Scaffolds</span>
        <ul>
          <li className="mb-2 w-full">
            <NavLink
              to={routes.scaffoldsUsers()}
              className="w-full inline-block text-normal font-body px-4 py-2 rounded-md hover:bg-purple-100"
              activeClassName="bg-purple-100"
            >
              Users
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to={routes.scaffoldsUserRoles()}
              className="w-full inline-block text-normal font-body px-4 py-2 rounded-md hover:bg-purple-100"
              activeClassName="bg-purple-100"
            >
              User Roles
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to={routes.scaffoldsGroups()}
              className="w-full inline-block text-normal font-body px-4 py-2 rounded-md hover:bg-purple-100"
              activeClassName="bg-purple-100"
            >
              Groups
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to={routes.scaffoldsEnrollments()}
              className="w-full inline-block text-normal font-body px-4 py-2 rounded-md hover:bg-purple-100"
              activeClassName="bg-purple-100"
            >
              Enrollments
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to={routes.scaffoldsFeedbacks()}
              className="w-full inline-block text-normal font-body px-4 py-2 rounded-md hover:bg-purple-100"
              activeClassName="bg-purple-100"
            >
              Feedbacks
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to={routes.scaffoldsBehaviors()}
              className="w-full inline-block text-normal font-body px-4 py-2 rounded-md hover:bg-purple-100"
              activeClassName="bg-purple-100"
            >
              Behaviors
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to={routes.scaffoldsRewards()}
              className="w-full inline-block text-normal font-body px-4 py-2 rounded-md hover:bg-purple-100"
              activeClassName="bg-purple-100"
            >
              Rewards
            </NavLink>
          </li>
        </ul>
      </>
    </div>
  )
}

export default ScaffoldNav
