import { useState } from 'react'
import type { FindBehaviorsOwnedQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CopyBehaviorListItem from 'src/components/CopyBehaviorListItem'

export const QUERY = gql`
  query FindBehaviorsOwnedQuery($userId: String!) {
    behaviorsOwned: behaviorsOwned(userId: $userId) {
      id
      name
      value
      group {
        id
        name
      }
    }
    groupsOwned(userId: $userId) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ behaviorsOwned, groupsOwned, parentGroupId }: CellSuccessProps<FindBehaviorsOwnedQuery>) => {
  const [group, setGroup] = useState(groupsOwned[0].id)

  const handleChange = (e) => {
    setGroup(e.target.value)
  }
  console.log(behaviorsOwned, groupsOwned, parentGroupId)

  return (
    <div className="mt-4">
      <div className="my-2 ml-2">
      <span>Select Class/Group:</span>
      <select name="group" id="groups" className="bg-purple-100 rounded ml-2 py-1 px-2" onChange={(e) => {
        handleChange(e)
      }}>
        {groupsOwned.map(group => (
          <option key={group.id} value={group.id}>{group.name}</option>
        ))}
      </select>
      </div>
    <ul className="h-5/6 overflow-scroll">
      {behaviorsOwned.map(behavior => {
        if (behavior.group.id === group) {
          return (
            <CopyBehaviorListItem behavior={behavior} parentGroupId={parentGroupId} key={behavior.id}/>
          )
        }
      })}
    </ul>
    </div>
  )
}
