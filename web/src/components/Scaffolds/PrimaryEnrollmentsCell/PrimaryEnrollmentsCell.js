import { Link, routes } from '@redwoodjs/router'

import PrimaryEnrollments from 'src/components/Scaffolds/PrimaryEnrollments'

export const QUERY = gql`
  query PRIMARY_ENROLLMENTS {
    primaryEnrollments {
      id
      userId
      primaryGroupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No primaryEnrollments yet. '}
      <Link to={routes.scaffoldsNewPrimaryEnrollment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ primaryEnrollments }) => {
  return <PrimaryEnrollments primaryEnrollments={primaryEnrollments} />
}
