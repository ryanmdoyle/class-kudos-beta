import type { StudentGroupPointsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query StudentGroupPointsQuery($userId: String!, $groupId: String!) {
    groupPointsOfUser(userId: $userId, groupId: $groupId) {
      id
      points
    }
  }
`

export const Loading = () => <div className='text-green'>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ groupPointsOfUser }: CellSuccessProps<StudentGroupPointsQuery>) => {
  return (
    <div className='mb-1'>
      <span className="font-display text-5xl text-green mr-2">
        {groupPointsOfUser.points}
      </span>
      <span className="font-display text-xl text-green mr-6">
        group kudos
      </span>
    </div>
  )
}
