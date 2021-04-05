import { Link, routes, Redirect } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import LandingLayout from '../../layouts/LandingLayout'

const WelcomePage = () => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) return <Redirect to={routes.login()} />
  return (
    <LandingLayout>
      <h1 className="text-center text-3xl font-bold pb-4">
        Welcome to Class Kudos
      </h1>
      <p>
        This is a website that will eventually be for awarding and redeeming
        points in class!
      </p>
      <p>
        My default route is named <code>welcome</code>, link to me with `
        <Link to={routes.home()}>Welcome</Link>`
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
