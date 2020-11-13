import { Link, routes } from '@redwoodjs/router'

import UserRoles from 'src/components/Scaffolds/UserRoles'

export const QUERY = gql`
  query USER_ROLES {
    userRoles {
      id
      createdAt
      updatedAt
      name
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userRoles yet. '}
      <Link to={routes.scaffoldsNewUserRole()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ userRoles }) => {
  return <UserRoles userRoles={userRoles} />
}
