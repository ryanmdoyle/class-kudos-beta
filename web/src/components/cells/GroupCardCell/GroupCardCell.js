import GroupCard from 'src/components/GroupCard/GroupCard'

export const QUERY = gql`
  query GroupCardQuery {
    groupsOwned {
      id
      type
      name
      description
    }
    enrollmentsOfGroup {
      id
      groupId
    }
  }
`

export const Loading = () => <div className="animate-pulse">Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ groupsOwned, enrollmentsOfGroup, groupType }) => {
  let groupsOfType = [...groupsOwned]
  if (groupType) {
    groupsOfType = [...groupsOwned.filter((group) => group.type === groupType)]
  }
  return groupsOfType.map((group) => {
    const count = enrollmentsOfGroup.filter((e) => e.groupId === group.id)
      .length

    return (
      <GroupCard
        key={group.id}
        id={group.id}
        name={group.name}
        description={group.description}
        studentCount={count}
        groupType={groupType || null}
      />
    )
  })
}
