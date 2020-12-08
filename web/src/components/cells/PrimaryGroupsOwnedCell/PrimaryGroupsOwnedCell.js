export const QUERY = gql`
  query PrimaryGroupsOwnedQuery {
    primaryGroupsOwned {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ primaryGroupsOwned }) => {
  return (
    <ul>
      {primaryGroupsOwned.map((group) => (
        <li className="text-normal font-body pl-4 mb-2" key={group.id}>
          {group.name}
        </li>
      ))}
    </ul>
  )
}
