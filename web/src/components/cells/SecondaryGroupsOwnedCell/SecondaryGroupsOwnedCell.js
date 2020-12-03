export const QUERY = gql`
  query SecondaryGroupsOwnedQuery {
    secondaryGroupsOwned {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ secondaryGroupsOwned }) => {
  return (
    <ul>
      {secondaryGroupsOwned.map((group) => (
        <li className="text-normal font-body pl-4 mb-2" key={group.id}>
          {group.name}
        </li>
      ))}
    </ul>
  )
}
