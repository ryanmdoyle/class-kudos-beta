import UsersLayout from 'src/layouts/Scaffolds/UsersLayout'
import EditUserCell from 'src/components/cells/EditUserCell'

const EditUserPage = ({ id }) => {
  return (
    <UsersLayout>
      <EditUserCell id={id} />
    </UsersLayout>
  )
}

export default EditUserPage
