import { Redirect, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

// The Login page routes users to the appropriate dashboard based on their highest role
// If no role exists (teacher or student) they will be redirected to choose their role
// New and returning users are routed though this page
const LoginPage = () => {
  const { currentUser } = useAuth()

  if (currentUser?.roles?.includes('teacher'))
    return <Redirect to={routes.teacherHome()} />
  if (currentUser?.roles?.includes('student'))
    return <Redirect to={routes.studentHome()} />
  return <Redirect to={routes.chooseRole()} />
}

export default LoginPage
