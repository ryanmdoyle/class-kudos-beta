import { Link, routes } from '@redwoodjs/router'

import Enrollments from 'src/components/Scaffolds/Enrollments'

export const QUERY = gql`
  query ENROLLMENTS {
    enrollments {
      id
      userId
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No enrollments yet. '}
      <Link to={routes.scaffoldsNewEnrollment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ enrollments }) => {
  return <Enrollments enrollments={enrollments} />
}
