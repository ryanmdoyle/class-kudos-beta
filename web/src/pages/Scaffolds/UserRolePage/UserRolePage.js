import UserRolesLayout from 'src/layouts/Scaffolds/UserRolesLayout'
import UserRoleCell from 'src/components/Scaffolds/UserRoleCell'

const UserRolePage = ({ id }) => {
  return (
    <UserRolesLayout>
      <UserRoleCell id={id} />
    </UserRolesLayout>
  )
}

export default UserRolePage
