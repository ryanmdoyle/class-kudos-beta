import { Link, routes } from '@redwoodjs/router'

import SecondaryGroups from 'src/components/Scaffolds/SecondaryGroups'

export const QUERY = gql`
  query SECONDARY_GROUPS {
    secondaryGroups {
      id
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
      {'No secondaryGroups yet. '}
      <Link to={routes.scaffoldsNewSecondaryGroup()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ secondaryGroups }) => {
  return <SecondaryGroups secondaryGroups={secondaryGroups} />
}
