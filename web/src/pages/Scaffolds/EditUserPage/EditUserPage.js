import UsersLayout from 'src/layouts/Scaffolds/UsersLayout'
import EditUserCell from 'src/components/Scaffolds/EditUserCell'

const EditUserPage = ({ id }) => {
  return (
    <UsersLayout>
      <EditUserCell id={id} />
    </UsersLayout>
  )
}

export default EditUserPage
