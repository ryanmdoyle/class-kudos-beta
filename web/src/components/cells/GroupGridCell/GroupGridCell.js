import GroupGrid from 'src/components/GroupGrid/GroupGrid'

export const QUERY = gql`
  query GroupGridQuery($id: String!) {
    group(id: $id) {
      id
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ group }) => {
  return <GroupGrid enrollmentsOfGroup={group?.enrollments} />
}
