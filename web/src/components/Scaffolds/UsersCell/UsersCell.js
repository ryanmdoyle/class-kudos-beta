import { Link, routes } from '@redwoodjs/router'

import Users from 'src/components/Scaffolds/Users'

export const QUERY = gql`
  query USERS {
    users {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No users yet. '}
      <Link to={routes.scaffoldsNewUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ users }) => {
  return <Users users={users} />
}
