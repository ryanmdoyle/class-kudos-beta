export const QUERY = gql`
  query PrimaryGroupsOwnedQuery {
    primaryGroupsOwned {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ primaryGroupsOwned }) => {
  console.log('PrimaryGroupsOwned', primaryGroupsOwned)
  return JSON.stringify(primaryGroupsOwned)
}
