import UsersLayout from 'src/layouts/Scaffolds/UsersLayout'
import UserCell from 'src/components/Scaffolds/UserCell'

const UserPage = ({ id }) => {
  return (
    <UsersLayout>
      <UserCell id={id} />
    </UsersLayout>
  )
}

export default UserPage
