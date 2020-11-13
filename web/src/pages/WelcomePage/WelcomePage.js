import { Link, routes } from '@redwoodjs/router'

import LandingLayout from '../../layouts/LandingLayout'

const WelcomePage = () => {
  return (
    <LandingLayout>
      <h1>WelcomePage</h1>
      <p>
        Find me in <code>./web/src/pages/WelcomePage/WelcomePage.js</code>
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
