export const QUERY = gql`
  query PrimaryGroupsOwnedDetailsQuery {
    primaryGroupsOwned {
      id
      name
      description
    }
    # Add students query here for enrolled
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ primaryGroupsOwnedDetails }) => {
  return JSON.stringify(primaryGroupsOwnedDetails)
  <ClassGroupItem />
}
