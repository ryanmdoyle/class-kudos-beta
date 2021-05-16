import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { routes, Redirect } from '@redwoodjs/router'

import LandingLayout from 'src/layouts/LandingLayout/LandingLayout'
import Student from 'src/components/svg/Student/Student'
import Teacher from 'src/components/svg/Teacher/Teacher'

// see https://github.com/redwoodjs/example-todo/blob/f29069c9dc89fa3734c6f99816442e14dc73dbf7/web/src/components/TodoListCell/TodoListCell.js#L26-L44
const ADD_ROLE = gql`
  mutation ADD_ROLE($name: String!, $userId: String!) {
    createUserRole(input: { name: $name, userId: $userId }) {
      id
    }
  }
`

const ChooseRolePage = () => {
  const { currentUser } = useAuth()
  const [addRole] = useMutation(ADD_ROLE)
  // Reroutes user after adding role and win.loc.reload
  // Using becuase redwood reroute() not working? (Maybe caching)
  if (currentUser?.roles?.includes('teacher'))
    return <Redirect to={routes.teacherHome()} />
  if (currentUser?.roles?.includes('student'))
    return <Redirect to={routes.studentHome()} />

  const addTeacher = async () => {
    await addRole({
      variables: {
        name: 'teacher',
        userId: currentUser.id,
      },
    })
    window.location.reload()
  }

  const addStudent = async () => {
    await addRole({
      variables: {
        name: 'student',
        userId: currentUser.id,
      },
    })
    window.location.reload()
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
        <div className="flex flex-col md:flex-row w-full lg:w-2/3 justify-evenly lg:justify-between items-center">
          <div className="flex flex-col justify-center">
            <Student />
            <button
              onClick={() => {
                const response = window.confirm(
                  'Are you sure you want to create a STUDENT account?'
                )
                if (response) {
                  addStudent()
                }
              }}
              className="button-green"
            >
              Student
            </button>
          </div>
          <div className="flex flex-col justify-between">
            <Teacher />
            <button
              onClick={() => {
                const response = window.confirm(
                  'Are you sure you want to create a TEACHER account?'
                )
                if (response) {
                  addTeacher()
                }
              }}
              className="button-green"
            >
              Teacher
            </button>
          </div>
        </div>
      </div>
    </LandingLayout>
  )
}

export default ChooseRolePage
