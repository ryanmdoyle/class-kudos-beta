import UserRole from 'src/components/Scaffolds/UserRole'

export const QUERY = gql`
  query FIND_USER_ROLE_BY_ID($id: String!) {
    userRole: userRole(id: $id) {
      id
      createdAt
      updatedAt
      name
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserRole not found</div>

export const Success = ({ userRole }) => {
  return <UserRole userRole={userRole} />
}
