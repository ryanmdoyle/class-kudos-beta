import { Link, routes } from '@redwoodjs/router'

import Behaviors from 'src/components/Scaffolds/Behaviors'

export const QUERY = gql`
  query BEHAVIORS {
    behaviors {
      id
      name
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No behaviors yet. '}
      <Link to={routes.scaffoldsNewBehavior()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ behaviors }) => {
  return <Behaviors behaviors={behaviors} />
}
