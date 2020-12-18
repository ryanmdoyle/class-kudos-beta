import { Link, routes } from '@redwoodjs/router'

import Feedbacks from 'src/components/Scaffolds/Feedbacks'

export const QUERY = gql`
  query FEEDBACKS {
    feedbacks {
      id
      type
      createdAt
      userId
      behaviorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No feedbacks yet. '}
      <Link to={routes.scaffoldsNewFeedback()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ feedbacks }) => {
  return <Feedbacks feedbacks={feedbacks} />
}
