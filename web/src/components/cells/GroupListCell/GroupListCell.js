export const QUERY = gql`
  query GroupListQuery($id: String!) {
    group(id: $id) {
      id
      name
    }
    enrollmentsOfGroup(groupId: $id) {
      id
      user {
        id
        firstName
        lastName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ group, enrollmentsOfGroup }) => {
  console.log(group, enrollmentsOfGroup)
  return <h1 className="text-3xl font-display pt-3 pl-5">{group.name}</h1>
}
