import GroupCard from 'src/components/GroupCard/GroupCard'

export const QUERY = gql`
  query SecondaryGroupCardQuery {
    secondaryGroupsOwned {
      id
      name
      description
    }
    secondaryEnrollmentsOfGroup {
      id
      secondaryGroupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({
  secondaryGroupsOwned,
  secondaryEnrollmentsOfGroup,
}) => {
  return secondaryGroupsOwned.map((group) => {
    const count = secondaryEnrollmentsOfGroup.filter(
      (e) => e.secondaryGroupId === group.id
    ).length

    return (
      <GroupCard
        key={group.id}
        name={group.name}
        description={group.description}
        studentCount={count}
      />
    )
  })
}
