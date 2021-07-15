import type { FindStudentGroupPointValueQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query StudentGroupPointValueQuery($userId: String!, $groupId: String!) {
    groupPointsOfUser(userId: $userId, groupId: $groupId) {
      id
      points
    }
  }
`

export const Loading = () => <span className='animate-pulse'>...</span>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ groupPointsOfUser }: CellSuccessProps<FindStudentGroupPointValueQuery>) => {
  return groupPointsOfUser.points
}
