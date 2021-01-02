import Group from 'src/components/Scaffolds/Group'

export const QUERY = gql`
  query FIND_GROUP_BY_ID($id: String!) {
    group: group(id: $id) {
      id
      type
      name
      description
      ownerId
      enrollId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Group not found</div>

export const Success = ({ group }) => {
  return <Group group={group} />
}
