import { Link, routes } from '@redwoodjs/router'

import PrimaryGroups from 'src/components/Scaffolds/PrimaryGroups'

export const QUERY = gql`
  query PRIMARY_GROUPS {
    primaryGroups {
      id
      name
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No primaryGroups yet. '}
      <Link to={routes.scaffoldsNewPrimaryGroup()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ primaryGroups }) => {
  return <PrimaryGroups primaryGroups={primaryGroups} />
}
