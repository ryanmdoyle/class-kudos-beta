import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import LandingLayout from '../../layouts/LandingLayout'

const WelcomePage = () => {
  const { currentUser } = useAuth()

  // temp routing (before apply route permissions to router)
  const routeByRole = () => {
    if (currentUser) {
      if (currentUser.roles === null) {
        navigate('/choose-role')
      } else if (currentUser.roles.includes('teacher')) {
        navigate('/teacher')
      } else {
        navigate('/student')
      }
    }
  }
  routeByRole()
  return (
    <LandingLayout>
      <h1 className="text-center text-3xl font-bold pb-4">
        Welcome to Class Karma
      </h1>
      <p>
        This is a website that will eventually be for awarding and redeeming
        points in class!
      </p>
      <p>
        My default route is named <code>welcome</code>, link to me with `
        <Link to={routes.welcome()}>Welcome</Link>`
      </p>
      <p>
        <Link to={routes.studentHome()}>Student Home</Link>
      </p>
      <p>
        <Link to={routes.teacherHome()}>Teacher Home</Link>
      </p>
      <p>
        <Link to={routes.scaffoldsUsers()}>User Admin</Link>
      </p>
    </LandingLayout>
  )
}

export default WelcomePage
