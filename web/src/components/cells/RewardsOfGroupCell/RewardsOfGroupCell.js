import RewardOptionsListItem from 'src/components/RewardOptionsListItem/RewardOptionsListItem'
import LoadingOptionsListItem from 'src/components/LoadingOptionsListItem/LoadingOptionsListItem'

export const QUERY = gql`
  query RewardsOfGroupQuery($groupId: String!) {
    rewardsOfGroup(groupId: $groupId) {
      id
      name
      cost
    }
  }
`

export const Loading = () => <LoadingOptionsListItem />

export const Empty = () => (
  <div className="text-gray-400">
    No rewards yet! Give 'em something to work for!
  </div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ rewardsOfGroup, groupId }) => {
  return (
    <ul className="w-full">
      {rewardsOfGroup?.map((reward) => (
        <RewardOptionsListItem
          key={reward.id}
          id={reward.id}
          name={reward.name}
          cost={reward.cost}
          groupId={groupId}
        />
      ))}
    </ul>
  )
}
