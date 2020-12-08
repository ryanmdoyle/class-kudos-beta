import { Link, routes } from '@redwoodjs/router'

import Groups from 'src/components/Scaffolds/Groups'

export const QUERY = gql`
  query GROUPS {
    groups {
      id
      type
      name
      description
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No groups yet. '}
      <Link to={routes.scaffoldsNewGroup()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ groups }) => {
  return <Groups groups={groups} />
}
