import { useState } from 'react'
import type { FindRewardsOwnedQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CopyRewardListItem from 'src/components/CopyRewardListItem'

export const QUERY = gql`
  query FindRewardsOwnedQuery($userId: String!) {
    rewardsOwned: rewardsOwned(userId: $userId) {
      id
      name
      cost
      responseRequired
      responsePrompt
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

export const Success = ({ rewardsOwned, groupsOwned, parentGroupId }: CellSuccessProps<FindRewardsOwnedQuery>) => {
  const [rewardId, setReward] = useState(groupsOwned[0].id)

  const handleChange = (e) => {
    setReward(e.target.value)
  }

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
      {rewardsOwned.map(reward => {
        if (reward.group.id === rewardId) {
          return (
            <CopyRewardListItem reward={reward} parentGroupId={parentGroupId} key={reward.id}/>
          )
        }
      })}
    </ul>
    </div>
  )
}
