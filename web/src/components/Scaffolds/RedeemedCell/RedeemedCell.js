import Redeemed from 'src/components/Scaffolds/Redeemed'

export const QUERY = gql`
  query FIND_REDEEMED_BY_ID($id: String!) {
    redeemed: redeemed(id: $id) {
      id
      userId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Redeemed not found</div>

export const Success = ({ redeemed }) => {
  return <Redeemed redeemed={redeemed} />
}
