import PrimaryGroup from 'src/components/Scaffolds/PrimaryGroup'

export const QUERY = gql`
  query FIND_PRIMARY_GROUP_BY_ID($id: String!) {
    primaryGroup: primaryGroup(id: $id) {
      id
      name
      description
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PrimaryGroup not found</div>

export const Success = ({ primaryGroup }) => {
  return <PrimaryGroup primaryGroup={primaryGroup} />
}
