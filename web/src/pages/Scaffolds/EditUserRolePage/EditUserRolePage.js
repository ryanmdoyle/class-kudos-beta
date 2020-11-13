import UserRolesLayout from 'src/layouts/Scaffolds/UserRolesLayout'
import EditUserRoleCell from 'src/components/Scaffolds/EditUserRoleCell'

const EditUserRolePage = ({ id }) => {
  return (
    <UserRolesLayout>
      <EditUserRoleCell id={id} />
    </UserRolesLayout>
  )
}

export default EditUserRolePage
