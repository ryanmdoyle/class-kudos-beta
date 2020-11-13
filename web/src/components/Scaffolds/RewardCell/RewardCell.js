import Reward from 'src/components/Scaffolds/Reward'

export const QUERY = gql`
  query FIND_REWARD_BY_ID($id: String!) {
    reward: reward(id: $id) {
      id
      name
      cost
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Reward not found</div>

export const Success = ({ reward }) => {
  return <Reward reward={reward} />
}
