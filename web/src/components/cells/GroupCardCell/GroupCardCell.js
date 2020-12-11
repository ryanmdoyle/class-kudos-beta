import GroupCard from 'src/components/GroupCard/GroupCard'

export const QUERY = gql`
  query GroupCardQuery {
    groupsOwned {
      id
      type
      name
      description
      enrollments {
        id
        user {
          id
          firstName
          lastName
        }
      }
    }
  }
`

export const Loading = () => <div className="animate-pulse">Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ groupsOwned, groupType }) => {
  let groupsOfType = [...groupsOwned]
  if (groupType) {
    groupsOfType = [...groupsOwned.filter((group) => group.type === groupType)]
  }
  return groupsOfType.map((group) => {
    return (
      <GroupCard
        key={group.id}
        id={group.id}
        name={group.name}
        description={group.description}
        studentCount={group.enrollments.length}
        groupType={groupType || null}
      />
    )
  })
}
