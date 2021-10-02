import type { FindGroupPointsOfGroupQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindGroupPointsOfGroupQuery($groupId: String!) {
    groupPointsOfGroup: groupPointsOfGroup(groupId: $groupId)
  }
`

export const Loading = () => <span className="text-sm animate-pulse">...</span>

export const Empty = () => 0

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  groupPointsOfGroup,
}: CellSuccessProps<FindGroupPointsOfGroupQuery>) => {
  return <div>{JSON.stringify(groupPointsOfGroup)}</div>
}
