import GroupCard from 'src/components/GroupCard/GroupCard'

export const QUERY = gql`
  query PrimaryGroupCardQuery {
    primaryGroupsOwned {
      id
      name
      description
    }
    primaryEnrollmentsOfGroup {
      id
      primaryGroupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ primaryGroupsOwned, primaryEnrollmentsOfGroup }) => {
  return primaryGroupsOwned.map((group) => {
    const count = primaryEnrollmentsOfGroup.filter(
      (e) => e.primaryGroupId === group.id
    ).length

    return (
      <GroupCard
        key={group.id}
        id={group.id}
        name={group.name}
        description={group.description}
        studentCount={count}
      />
    )
  })
}
