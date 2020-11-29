import { Link, routes } from '@redwoodjs/router'

import SecondaryEnrollments from 'src/components/Scaffolds/SecondaryEnrollments'

export const QUERY = gql`
  query SECONDARY_ENROLLMENTS {
    secondaryEnrollments {
      id
      userId
      secondaryGroupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No secondaryEnrollments yet. '}
      <Link to={routes.scaffoldsNewSecondaryEnrollment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ secondaryEnrollments }) => {
  return <SecondaryEnrollments secondaryEnrollments={secondaryEnrollments} />
}
