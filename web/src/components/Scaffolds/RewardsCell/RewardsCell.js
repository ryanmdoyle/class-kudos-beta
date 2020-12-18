import { Link, routes } from '@redwoodjs/router'

import Rewards from 'src/components/Scaffolds/Rewards'

export const QUERY = gql`
  query REWARDS {
    rewards {
      id
      name
      cost
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No rewards yet. '}
      <Link to={routes.scaffoldsNewReward()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ rewards }) => {
  return <Rewards rewards={rewards} />
}
