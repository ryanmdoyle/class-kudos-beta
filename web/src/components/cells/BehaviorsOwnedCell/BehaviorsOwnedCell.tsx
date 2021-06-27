import type { FindBehaviorsOwnedQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindBehaviorsOwnedQuery($userId: String!) {
    behaviorsOwned: behaviorsOwned(userId: $userId) {
      id
      name
      value
      group {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ behaviorsOwned }: CellSuccessProps<FindBehaviorsOwnedQuery>) => {
  return (
    <div>
    <ul className="h-5/6 overflow-scroll">
      {behaviorsOwned.map(behavior => (
        <li className="white-box mb-2 mx-2 flex justify-between">
          <span>
            <span>{behavior.name}</span>
            {` - `}
            <span className="text-gray-500">{behavior.group.name}</span>
          </span>
          <span>{behavior.value}</span>
        </li>
      ))}
    </ul>
    </div>
  )
}
