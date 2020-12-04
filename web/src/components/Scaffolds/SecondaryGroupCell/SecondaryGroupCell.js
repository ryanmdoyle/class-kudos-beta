import SecondaryGroup from 'src/components/Scaffolds/SecondaryGroup'

export const QUERY = gql`
  query FIND_SECONDARY_GROUP_BY_ID($id: String!) {
    secondaryGroup: secondaryGroup(id: $id) {
      id
      name
      description
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SecondaryGroup not found</div>

export const Success = ({ secondaryGroup }) => {
  return <SecondaryGroup secondaryGroup={secondaryGroup} />
}
