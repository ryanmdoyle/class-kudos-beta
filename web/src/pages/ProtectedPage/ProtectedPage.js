import { Link, routes } from '@redwoodjs/router'

const ProtectedPage = () => {
  return (
    <>
      <h1>ProtectedPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProtectedPage/ProtectedPage.js</code>
      </p>
      <p>
        My default route is named <code>protected</code>, link to me with `
        <Link to={routes.protected()}>Protected</Link>`
      </p>
    </>
  )
}

export default ProtectedPage
