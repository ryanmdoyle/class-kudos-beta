// import { Link, routes } from '@redwoodjs/router'
import LandingLayout from 'src/layouts/LandingLayout/LandingLayout'
import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { navigate } from '@redwoodjs/router'

// see https://github.com/redwoodjs/example-todo/blob/f29069c9dc89fa3734c6f99816442e14dc73dbf7/web/src/components/TodoListCell/TodoListCell.js#L26-L44
const ADD_ROLE = gql`
  mutation ADD_ROLE($name: String!, $userId: String) {
    createUserRole(input: { name: $name, userId: $userId }) {
      id
    }
  }
`

const ChooseRolePage = () => {
  const { currentUser } = useAuth()
  const [addRole] = useMutation(ADD_ROLE)

  const addTeacher = async () => {
    await addRole({
      variables: {
        name: 'teacher',
        userId: currentUser.id,
      },
    })
    navigate('/teacher')
  }

  const addStudent = async () => {
    await addRole({
      variables: {
        name: 'student',
        userId: currentUser.id,
      },
    })
    navigate('/student')
  }
  return (
    <LandingLayout>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-display text-center w-full mb-4">
          Select Your Role
        </h1>
        <p className=" text-base text-center font-body w-full mb-8">
          Are you a...
        </p>
        <button
          onClick={() => {
            addTeacher()
          }}
          className="button-green mb-4"
        >
          Teacher
        </button>
        <button
          onClick={() => {
            addStudent()
          }}
          className="button-green"
        >
          Student
        </button>
      </div>
    </LandingLayout>
  )
}

export default ChooseRolePage
